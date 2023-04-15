import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";

import { SortValues } from "src/pages/Store/types/filterTypes";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface PriceSortProps {
  sortBy: SortValues;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PriceSort = ({ sortBy, handleChange }: PriceSortProps) => {
  return (
    <div className={styleClasses.sortBlock}>
      <Form.Check
        type="radio"
        label="Дорогие выше"
        value="DESC"
        checked={sortBy === "DESC"}
        className={styleClasses.radio}
        onChange={handleChange}
      />
      <Form.Check
        type="radio"
        label="Дешевые выше"
        value="ASC"
        checked={sortBy === "ASC"}
        className={styleClasses.radio}
        onChange={handleChange}
      />
    </div>
  );
};

export default PriceSort;
