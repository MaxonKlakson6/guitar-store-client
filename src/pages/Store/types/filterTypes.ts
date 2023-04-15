export type SortValues = "DESC" | "ASC";

export interface PriceRange {
  min: string;
  max: string;
}

export interface CheckBox {
  name: string;
  checked: boolean;
}

export interface CheckBoxGroup {
  material: CheckBox[];
  stringQuantity: CheckBox[];
  color: CheckBox[];
  type: CheckBox[];
}
