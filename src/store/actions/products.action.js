import { productsType } from "../types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsType;

export const selectedProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
