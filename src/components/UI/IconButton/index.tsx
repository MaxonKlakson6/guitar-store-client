import { MouseEvent, ReactNode } from "react";

import styleClasses from "src/components/UI/IconButton/styles.module.scss";

interface IconButtonProps {
  imageUrl: string;
  imageAlt: string;
  imageClassName?: string;
  buttonClassName?: string;
  badge?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
  imageUrl,
  imageAlt,
  imageClassName,
  buttonClassName = "",
  badge,
  onClick,
}: IconButtonProps) => {
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
