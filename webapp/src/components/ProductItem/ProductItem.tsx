import React from "react";
import { ProductData } from "../interfaces";

const ProductItem = ({ product }: { product: ProductData }) => (
  <div className="flex flex-col justify-around items-center bg-neutral-300 border border-gray-200 rounded-lg shadow md:flex-row m-2 h-80 md:h-56 w-96">
    <img
      className="object-contain rounded-t-lg h-48 md:w-48 md:rounded-none md:rounded-s-lg p-1"
      src={product.ProductPhotoURL}
      alt={`${product?.ProductName}`}
      data-testid="product-image"
    />
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5
        className="mb-2 text-xl font-bold tracking-tight text-gray-900 "
        data-testid="product-id"
      >
        {product?.ProductID}
      </h5>
      <h5
        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 "
        data-testid="product-name"
      >
        {product?.ProductName}
      </h5>
      <p
        className="mb-3 font-normal text-gray-700"
        data-testid="product-status"
      >
        {product?.ProductStatus}
      </p>
    </div>
  </div>
);

export default ProductItem;
