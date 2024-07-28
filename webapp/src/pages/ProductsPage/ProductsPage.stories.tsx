import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import { ACTIVE_PRODUCT_URL } from "../ApiHelper";

export default {
  title: "Products Page",
  component: ProductsPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
    {
      url: ACTIVE_PRODUCT_URL,
      method: "GET",
      status: 200,
      response: {
        data: [
          {
            ProductID: 1,
            ProductName: "Hat",
            ProductPhotoURL:
              "https://lh3.googleusercontent.com/pw/AP1GczPbtJWMWa3iUqbdWbQ3ddnGY-7KLtTHsWVpoaXc-lDS1LRfCssnPqnbKk-mai2l1qqT8MRfKpyw5JxRJA1qks7EyAZALs44ufvShZFjE8wiZh1TzRGrfokJoJmss-WOu1CKR60B2tarLGiHSXWO3_s=w1495-h993-s-no-gm",
            ProductStatus: "Active",
          },
          {
            ProductID: 2,
            ProductName: "Shoes",
            ProductPhotoURL:
              "https://lh3.googleusercontent.com/pw/AP1GczMHwnDE8OHnPZCu-9vebj7ZJlhO01TDu0AFLdk3kWEGlf-n_-_lhqjhG3tJQNSO1b4vsVfApDeKqEn1Su9pum3U8Hw-XfGP2etnw7ff7X7Dos4SKN8-mTBI3Tz_43yX2AqgcOnJAYCuXE261ko7guI=w1490-h993-s-no-gm",
            ProductStatus: "Active",
          },
          {
            ProductID: 3,
            ProductName: "Pants",
            ProductPhotoURL:
              "https://lh3.googleusercontent.com/pw/AP1GczO6RZmahlhLTaRSLBbOW3Y7ZkuZqLk20YRqTfvEQ1Ltfv6I_k6rH6RKuOl-yGu47agz2Og1BdW904wMXkLv1pzRYWFU2jlVHsrhtDCTPy13fmn2bcJtOFemdZBP_K5dKLTjM3MC_-2yDr2bh2BNUJ8=w408-h612-s-no-gm",
            ProductStatus: "Active",
          },
        ],
        message: "",
      },
    },
  ],
};

export const GetDataSuccessEmpty = Template.bind({});
GetDataSuccessEmpty.parameters = {
  mockData: [
    {
      url: ACTIVE_PRODUCT_URL,
      method: "GET",
      status: 200,
      response: {
        data: [],
        message: "",
      },
    },
  ],
};

export const GetDataError = Template.bind({});
GetDataError.parameters = {
  mockData: [
    {
      url: ACTIVE_PRODUCT_URL,
      method: "GET",
      status: 500,
      response: {
        data: [],
        message: "Error",
      },
    },
  ],
};
