import { MouseEvent } from "react";
import stylesClasses from "src/components/UI/Counter/styles.module.scss";

interface CounerProps {
  count: number;
  handleIncrement: (event: MouseEvent<HTMLButtonElement>) => void;
  handleDecrement: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Counter = ({ count, handleIncrement, handleDecrement }: CounerProps) => {
  return (
    <div className={stylesClasses.counter}>
      <button className={stylesClasses.counterButton} onClick={handleDecrement}>
        -
      </button>
      {count}
      <button className={stylesClasses.counterButton} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
