import { Card } from "react-bootstrap";

import IconButton from "src/components/UI/IconButton";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import styleClasses from "src/components/ProductCard/styles.module.scss";

interface ProductCardProps {
  productName: string;
  price: number;
  image: string;
}

const ProductCard = ({ productName, price, image }: ProductCardProps) => {
  return (
    <Card className={styleClasses.card}>
      <Card.Img src={image} variant="top" className={styleClasses.cardImage} />
      <IconButton
        imageUrl={heartIcon}
        imageAlt="Favourite"
        buttonClassName={styleClasses.favouriteButton}
        imageClassName={styleClasses.favouriteIcon}
      />
      <Card.Body>
        <Card.Title className={styleClasses.cardTitle}>
          {productName}
        </Card.Title>
        <Card.Text className={styleClasses.cardPrice}>{price} б.р</Card.Text>
        <IconButton
          imageUrl={cartIcon}
          imageAlt="cart"
          buttonClassName={styleClasses.addCartButton}
          imageClassName={styleClasses.cartIcon}
        />
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
