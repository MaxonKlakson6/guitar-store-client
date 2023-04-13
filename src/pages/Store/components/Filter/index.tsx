import { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";

import {
  colors,
  materials,
  stringQuantity,
} from "src/constants/filterInitialValues";
import { SortValues, CheckBox } from "src/types/filterTypes";
import { onlyNumbersRegexp } from "src/constants/regexps";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";
import CheckBoxBlock from "./CheckBoxBlock";
import PriceSort from "./PriceSort";
import PriceRange from "./PriceRange";

interface CheckBoxeGroups {
  material: CheckBox[];
  stringQuantity: CheckBox[];
  color: CheckBox[];
}

const Filter = () => {
  const [sortValue, setSortValue] = useState<SortValues>("DESC");
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxeGroups>({
    material: materials,
    stringQuantity,
    color: colors,
  });
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });

  const handleChangeCheckBoxes = (
    checkBoxGrupName: keyof CheckBoxeGroups,
    index: number
  ) => {
    const checkBoxGroupCopy = [...checkBoxes[checkBoxGrupName]];
    const { name, checked } = checkBoxGroupCopy[index];

    checkBoxGroupCopy.splice(index, 1, { name, checked: !checked });

    setCheckBoxes({ ...checkBoxes, [checkBoxGrupName]: checkBoxGroupCopy });
  };

  const handleChangePriceRange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (value.match(onlyNumbersRegexp) || value.length === 0) {
      setPriceRange({
        ...priceRange,
        [name]: value,
      });
    }
  };

  const handleSortValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value as SortValues;
    setSortValue(inputValue);
  };

  return (
    <div className={styleClasses.filter}>
      <h3 className={styleClasses.title}>Сортировка по:</h3>
      <Form>
        <PriceSort sortBy={sortValue} handleChange={handleSortValueChange} />
        <h3 className={styleClasses.title}>Фильтры товаров</h3>
        <PriceRange
          min={priceRange.min}
          max={priceRange.max}
          handleChange={handleChangePriceRange}
        />
        <CheckBoxBlock>
          {checkBoxes.material.map(({ name, checked }, index) => (
            <Form.Check
              key={name}
              type="checkbox"
              label={name}
              checked={checked}
              className={styleClasses.checkBox}
              onChange={() => handleChangeCheckBoxes("material", index)}
            />
          ))}
        </CheckBoxBlock>
        <CheckBoxBlock>
          {checkBoxes.stringQuantity.map(({ name, checked }, index) => (
            <Form.Check
              key={name}
              type="checkbox"
              label={name}
              checked={checked}
              className={styleClasses.checkBox}
              onChange={() => handleChangeCheckBoxes("stringQuantity", index)}
            />
          ))}
        </CheckBoxBlock>
        <CheckBoxBlock>
          {checkBoxes.color.map(({ name, checked }, index) => (
            <Form.Check
              key={name}
              type="checkbox"
              label={name}
              checked={checked}
              className={styleClasses.checkBox}
              onChange={() => handleChangeCheckBoxes("color", index)}
            />
          ))}
        </CheckBoxBlock>
      </Form>
    </div>
  );
};

export default Filter;
