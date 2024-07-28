import React from "react";
import { ComponentMeta } from "@storybook/react";
import ProductItem from "./ProductItem";

export default {
  title: "Product Item",
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>;

const getArgs = () => ({
  product: {
    ProductID: 1,
    ProductName: "Hat",
    ProductPhotoURL:
      "https://lh3.googleusercontent.com/pw/AP1GczPbtJWMWa3iUqbdWbQ3ddnGY-7KLtTHsWVpoaXc-lDS1LRfCssnPqnbKk-mai2l1qqT8MRfKpyw5JxRJA1qks7EyAZALs44ufvShZFjE8wiZh1TzRGrfokJoJmss-WOu1CKR60B2tarLGiHSXWO3_s=w1495-h993-s-no-gm",
    ProductStatus: "Active",
  },
});

export const productItem = () => <ProductItem {...getArgs()} />;
