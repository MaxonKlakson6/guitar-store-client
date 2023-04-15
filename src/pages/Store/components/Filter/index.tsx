import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import debounce from "lodash.debounce";

import CheckBoxBlock from "src/pages/Store/components/Filter/CheckBoxBlock";
import PriceSort from "src/pages/Store/components/Filter/PriceSort";
import PriceRange from "src/pages/Store/components/Filter/PriceRange";
import GuitarFilter from "src/pages/Store/components/Filter/GuitarFilter";
import { getGoodsRequestParams } from "src/helpers/getGoodsRequestParams";
import {
  colors,
  materials,
  stringQuantity,
  type,
} from "src/constants/filterInitialValues";
import { onlyNumbersRegexp } from "src/constants/regexps";
import {
  SortValues,
  CheckBoxGroup,
  PriceRange as PriceRangeType,
} from "src/pages/Store/types/filterTypes";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface FilterProps {
  category: string;
  loadGoods: (requestBody: GetGoodsRequest) => void;
}

const Filter = ({ category, loadGoods }: FilterProps) => {
  const [sortValue, setSortValue] = useState<SortValues>("DESC");
  const [checkBoxes, setCheckBoxes] = useState<CheckBoxGroup>({
    material: materials,
    stringQuantity,
    color: colors,
    type,
  });
  const [debouncedPriceRange, setDebouncedPriceRange] =
    useState<PriceRangeType>({
      min: "",
      max: "",
    });
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    min: "",
    max: "",
  });

  const changeDebouncedPriceRange = debounce(
    (name: string, value: string) =>
      setDebouncedPriceRange({ [name]: value, ...debouncedPriceRange }),
    500
  );

  const handleSortValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value as SortValues;
    setSortValue(inputValue);
  };

  const handleChangePriceRange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    if (value.match(onlyNumbersRegexp) || value.length === 0) {
      setPriceRange({
        ...priceRange,
        [name]: value,
      });
      changeDebouncedPriceRange(name, value);
    }
  };

  const handleChangeCheckBoxes = (
    checkBoxGrupName: keyof CheckBoxGroup,
    index: number
  ) => {
    const checkBoxGroupCopy = [...checkBoxes[checkBoxGrupName]];
    const { name, checked } = checkBoxGroupCopy[index];

    checkBoxGroupCopy.splice(index, 1, { name, checked: !checked });

    setCheckBoxes({ ...checkBoxes, [checkBoxGrupName]: checkBoxGroupCopy });
  };

  useEffect(() => {
    loadGoods(
      getGoodsRequestParams(category, checkBoxes, sortValue, priceRange)
    );
  }, [category, sortValue, debouncedPriceRange, checkBoxes]);

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
        {category === "аксессуары" ? (
          <CheckBoxBlock
            title="Назначение"
            wrapperClassName={styleClasses.typeWrapper}
          >
            {checkBoxes.type.map(({ name, checked }, index) => (
              <Form.Check
                key={name}
                type="checkbox"
                label={name}
                checked={checked}
                className={styleClasses.checkBox}
                onChange={() => handleChangeCheckBoxes("type", index)}
              />
            ))}
          </CheckBoxBlock>
        ) : (
          <GuitarFilter
            material={checkBoxes.material}
            stringQuantity={checkBoxes.stringQuantity}
            color={checkBoxes.color}
            handleChangeCheckBoxes={handleChangeCheckBoxes}
          />
        )}
      </Form>
    </div>
  );
};

export default Filter;
