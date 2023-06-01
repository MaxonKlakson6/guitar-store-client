import { MouseEvent, ReactNode } from "react";

import Tooltip from "src/components/UI/Tooltip";
import styleClasses from "src/components/UI/IconButton/styles.module.scss";

interface IconButtonProps {
  imageUrl: string;
  imageAlt: string;
  innerText?: string;
  imageClassName?: string;
  buttonClassName?: string;
  badge?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
  imageUrl,
  imageAlt,
  innerText,
  imageClassName,
  buttonClassName = "",
  badge,
  onClick,
}: IconButtonProps) => {
  if (innerText) {
    return (
      <Tooltip position="top" innerText={innerText}>
        <button
          onClick={onClick}
          className={`${styleClasses.button} ${buttonClassName}`}
        >
          <img src={imageUrl} alt={imageAlt} className={imageClassName} />
          {badge}
        </button>
      </Tooltip>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${styleClasses.button} ${buttonClassName}`}
    >
      <img src={imageUrl} alt={imageAlt} className={imageClassName} />
      {badge}
    </button>
  );
};

export default IconButton;
