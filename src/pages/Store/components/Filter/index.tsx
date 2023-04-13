import { ChangeEvent, useState } from "react";
import { Form } from "react-bootstrap";

import {
  colors,
  materials,
  stringQuantity,
} from "src/constants/filterInitialValues";
import { SortValues, CheckBox } from "src/types/filterTypes";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface CheckBoxes {
  material: CheckBox[];
  stringQuantity: CheckBox[];
  color: CheckBox[];
}

const Filter = () => {
  const [sortValue, setSortValue] = useState<SortValues>("DESC");
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxes>({
    material: materials,
    stringQuantity,
    color: colors,
  });
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: "",
  });

  const handleChangeCheckBoxes = (
    checkBoxGrupName: keyof CheckBoxes,
    index: number
  ) => {
    const checkBoxGroupCopy = [...checkBoxes[checkBoxGrupName]];
    const { name, checked } = checkBoxGroupCopy[index];

    checkBoxGroupCopy.splice(index, 1, { name, checked: !checked });

    setCheckBoxes({ ...checkBoxes, [checkBoxGrupName]: checkBoxGroupCopy });
  };

  const handleChangePriceRange = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = new RegExp("^[0-9]+$");
    const { value, name } = event.target;

    if (value.match(reg) || value.length === 0) {
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
        <div className={styleClasses.sortBlock}>
          <Form.Check
            name="expensive"
            type="radio"
            label="Дорогие выше"
            value="DESC"
            checked={sortValue === "DESC"}
            className={styleClasses.radio}
            onChange={handleSortValueChange}
          />
          <Form.Check
            name="cheap"
            type="radio"
            label="Дешевые выше"
            value="ASC"
            checked={sortValue === "ASC"}
            className={styleClasses.radio}
            onChange={handleSortValueChange}
          />
        </div>
        <h3 className={styleClasses.title}>Фильтры товаров</h3>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Цена</h4>
          <div className={styleClasses.priceRangeBlock}>
            <div>
              <input
                type="text"
                placeholder="мин"
                name="min"
                value={priceRange.min}
                className={styleClasses.priceInput}
                onChange={handleChangePriceRange}
              />
              <span>-br</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="макс"
                name="max"
                value={priceRange.max}
                className={styleClasses.priceInput}
                onChange={handleChangePriceRange}
              />
              <span>-br</span>
            </div>
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Материал</h4>
          <div className={styleClasses.checkBoxWrapper}>
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
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Количество струн</h4>
          <div className={styleClasses.stringsQuantityWrapper}>
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
          </div>
        </div>
        <div className={styleClasses.filterBlock}>
          <h4 className={styleClasses.filterTitle}>Цвет</h4>
          <div className={styleClasses.checkBoxWrapper}>
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
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
