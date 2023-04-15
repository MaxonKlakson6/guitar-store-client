import { getCheckedCheckboxes } from "src/helpers/getCheckedCheckboxes";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import {
  CheckBoxGroup,
  PriceRange,
  SortValues,
} from "src/pages/Store/types/filterTypes";

export const getGoodsRequestParams = (
  category: string,
  checkBoxes: CheckBoxGroup,
  sortValue: SortValues,
  priceRange: PriceRange
): GetGoodsRequest => {
  const { material, stringQuantity, color, type } = checkBoxes;
  const materialRequstData = getCheckedCheckboxes(material);
  const stringQuantityRequestData = getCheckedCheckboxes(stringQuantity);
  const colorRequestData = getCheckedCheckboxes(color);
  const typeRequestData = getCheckedCheckboxes(type);

  return {
    category,
    sortBy: sortValue,
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
    material: JSON.stringify(materialRequstData),
    stringQuantity: JSON.stringify(stringQuantityRequestData),
    color: JSON.stringify(colorRequestData),
    type: JSON.stringify(typeRequestData),
  };
};
