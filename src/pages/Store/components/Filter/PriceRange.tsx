import { ChangeEvent } from "react";
import styleClasses from "src/pages/Store/components/Filter/styles.module.scss";

interface PriceRangeProps {
  min: string;
  max: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PriceRange = ({ min, max, handleChange }: PriceRangeProps) => {
  return (
    <div className={styleClasses.filterBlock}>
      <h4 className={styleClasses.filterTitle}>Цена</h4>
      <div className={styleClasses.priceRangeBlock}>
        <div>
          <input
            type="text"
            placeholder="мин"
            name="min"
            value={min}
            className={styleClasses.priceInput}
            onChange={handleChange}
          />
          <span>-br</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="макс"
            name="max"
            value={max}
            className={styleClasses.priceInput}
            onChange={handleChange}
          />
          <span>-br</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
