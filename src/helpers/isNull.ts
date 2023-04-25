import { Product } from "src/types/products";

export const isNull = (product: Product | null): product is null =>
  product === null;
