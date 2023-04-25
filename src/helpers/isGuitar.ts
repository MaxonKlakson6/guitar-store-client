import { Guitar, Product } from "src/types/products";

export const isGuitar = (product: Product): product is Guitar => {
  return "stringQuantity" in product;
};
