import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import ProductItem from "./ProductItem";

describe("ProductItem", () => {
  let tree: ReactTestRenderer;
  beforeEach(() => {
    tree = create(
      <MemoryRouter>
        <ProductItem
          product={{
            ProductID: 1,
            ProductName: "Hat",
            ProductPhotoURL:
              "https://lh3.googleusercontent.com/pw/AP1GczPbtJWMWa3iUqbdWbQ3ddnGY-7KLtTHsWVpoaXc-lDS1LRfCssnPqnbKk-mai2l1qqT8MRfKpyw5JxRJA1qks7EyAZALs44ufvShZFjE8wiZh1TzRGrfokJoJmss-WOu1CKR60B2tarLGiHSXWO3_s=w1495-h993-s-no-gm",
            ProductStatus: "Active",
          }}
        />
      </MemoryRouter>
    );
  });
  afterEach(() => {
    tree.unmount();
  });
  it("rendersMainIcon", async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ "data-testid": "product-image" });
    await testInstance.findByProps({ "data-testid": "product-id" });
    await testInstance.findByProps({ "data-testid": "product-name" });
    await testInstance.findByProps({ "data-testid": "product-status" });
  });
});
