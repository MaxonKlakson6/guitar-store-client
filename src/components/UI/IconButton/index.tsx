import { MouseEvent } from "react";

import styleClasses from "src/components/UI/IconButton/styles.module.scss";

interface IconButtonProps {
  imageUrl: string;
  imageAlt: string;
  imageClassName?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
  imageUrl,
  imageAlt,
  imageClassName,
  onClick,
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={styleClasses.button}>
      <img src={imageUrl} alt={imageAlt} className={imageClassName} />
    </button>
  );
};

export default IconButton;
