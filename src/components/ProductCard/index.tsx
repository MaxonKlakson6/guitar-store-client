import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Tooltip from "src/components/UI/Tooltip";
import IconButton from "src/components/UI/IconButton";
import heartIcon from "src/static/icons/heart.png";
import redHeartIcon from "src/static/icons/heart_red.png";
import cartIcon from "src/static/icons/cart.png";
import styleClasses from "src/components/ProductCard/styles.module.scss";

interface ProductCardProps {
  vendorCode: number;
  productName: string;
  price: number;
  image: string;
  isFavourite: boolean;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleToggleFavouriteItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

const ProductCard = ({
  vendorCode,
  productName,
  price,
  image,
  isFavourite,
  handleAddCartItem,
  handleToggleFavouriteItem,
}: ProductCardProps) => {
  const addCartItem = (event: MouseEvent<HTMLButtonElement>) => {
    handleAddCartItem(event, vendorCode);
  };
  const toggleFavouriteItem = (event: MouseEvent<HTMLButtonElement>) => {
    handleToggleFavouriteItem(event, vendorCode);
  };

  const favouriteImageUrl = isFavourite ? redHeartIcon : heartIcon;
  const favouriteImageClassName = isFavourite
    ? styleClasses.favouriteIcon
    : styleClasses.notFavouriteIcon;

  return (
    <Link className={styleClasses.cardLink} to={`/product/${vendorCode}`}>
      <Card className={styleClasses.card}>
        <Card.Img
          src={image}
          variant="top"
          className={styleClasses.cardImage}
        />
        <IconButton
          imageUrl={favouriteImageUrl}
          imageAlt="Favourite"
          buttonClassName={styleClasses.favouriteButton}
          imageClassName={favouriteImageClassName}
          onClick={toggleFavouriteItem}
        />
        <Card.Body className={styleClasses.cardBody}>
          <Tooltip position="top" innerText={productName}>
            <Card.Title className={styleClasses.cardTitle}>
              {productName}
            </Card.Title>
          </Tooltip>
          <Card.Text className={styleClasses.cardPrice}>
            {price.toFixed(2)} б.р
          </Card.Text>
          <IconButton
            imageUrl={cartIcon}
            imageAlt="cart"
            buttonClassName={styleClasses.addCartButton}
            imageClassName={styleClasses.cartIcon}
            onClick={addCartItem}
          />
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
