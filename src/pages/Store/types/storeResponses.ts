import { Accessory, Guitar } from "src/types/products";

export interface GetAllGoodsResponse {
  guitars: Guitar[];
  accessories: Accessory[];
}
