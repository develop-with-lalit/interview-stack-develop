import axios from "axios";
import { Order, OrderData, ProductData } from "../components/interfaces";

const INPIPELINE_URL = '/api/orders/inpipeline';

const getInPipelineData = async () => {
  const orderData: OrderData = {
    Queued: [],
    InProgress: [],
    QA: [],
  };
  let errorOccured = false;
  try {
    const response = await axios.get(INPIPELINE_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((order: Order) => {
        orderData[order.OrderStatus as keyof OrderData].push(order);
      });
    } else {
      const { message } = response.data;
      throw message;
    }
    } catch(err) {
    console.error(err);
    errorOccured = true;
  }
  return { orderData, errorOccured };
};

const UPDATE_STATUS_URL = '/api/orders/update_status';

const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
  const updatedOrder = { ...order, OrderStatus: newOrderStatus };
  let orderStatusUpdated = false;
  try {
        const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
    if (response?.status === 200) orderStatusUpdated = true;
    else {
      const { message } = response.data;
      throw message;
    }
    } catch(err) {
    console.error(err);
  }
  return orderStatusUpdated;
};

const ACTIVE_PRODUCT_URL = "/api/products/active";

const getActiveProductsData = async () => {
  const productData: ProductData[] = [];
  let errorOccured = false;
  try {
    const response = await axios.get(ACTIVE_PRODUCT_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((product: ProductData) => {
        productData.push(product);
      });
    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { productData, errorOccured };
};

export {
  getInPipelineData,
  INPIPELINE_URL,
  updateOrderStatus,
  UPDATE_STATUS_URL,
  getActiveProductsData,
  ACTIVE_PRODUCT_URL
};
