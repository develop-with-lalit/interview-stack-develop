import React, { useState, useEffect } from "react";
import PageWrapper from "../PageWrapper";
import Spinner from "../../components/Spinner/Spinner";
import { ProductData } from "../../components/interfaces";
import { getActiveProductsData } from "../ApiHelper";
import ProductItem from "../../components/ProductItem/ProductItem";

const DATA_STATES = {
  waiting: "WAITING",
  loaded: "LOADED",
  error: "ERROR",
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState<ProductData[]>([]);

  const getActiveProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { productData, errorOccured } = await getActiveProductsData();
    setData(productData);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getActiveProducts();
  }, []);

  let content;
  if (loadingState === DATA_STATES.waiting)
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  else if (loadingState === DATA_STATES.loaded)
    content = (
      <>
        <h5 className="m-4 text-xl font-bold tracking-tight text-neutral-400 ">
          Active Products
        </h5>
        <div
          className="flex flex-row flex-wrap justify-around w-full pt-4"
          data-testid="products-container"
        >
          {data.map((product: ProductData) => {
            return <ProductItem product={product} key={product.ProductID} />;
          })}
        </div>
      </>
    );
  else
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occured fetching the data!
      </div>
    );

  return <PageWrapper>{content}</PageWrapper>;
};

export default ProductsPage;
