import { CheckBox } from "src/pages/Store/types/filterTypes";

export const getCheckedCheckboxes = (checkBoxesList: CheckBox[]) => {
  return checkBoxesList.reduce((finalArray, currentCheckbox) => {
    if (currentCheckbox.checked) {
      finalArray.push(currentCheckbox.name);
    }
    return finalArray;
  }, [] as string[]);
};
