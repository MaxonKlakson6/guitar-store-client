import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Tooltip from "src/components/UI/Tooltip";
import IconButton from "src/components/UI/IconButton";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import styleClasses from "src/components/ProductCard/styles.module.scss";

interface ProductCardProps {
  vendorCode: number;
  productName: string;
  price: number;
  image: string;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

const ProductCard = ({
  vendorCode,
  productName,
  price,
  image,
  handleAddCartItem,
}: ProductCardProps) => {
  const addCartItem = (event: MouseEvent<HTMLButtonElement>) => {
    handleAddCartItem(event, vendorCode);
  };

  return (
    <Link className={styleClasses.cardLink} to={`/product/${vendorCode}`}>
      <Card className={styleClasses.card}>
        <Card.Img
          src={image}
          variant="top"
          className={styleClasses.cardImage}
        />
        <IconButton
          imageUrl={heartIcon}
          imageAlt="Favourite"
          buttonClassName={styleClasses.favouriteButton}
          imageClassName={styleClasses.favouriteIcon}
          onClick={addCartItem}
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
