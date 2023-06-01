import { MouseEvent } from "react";

import GuitarDescription from "src/pages/Product/components/ProductLayout/GuitarDescription";
import AccessoryDescription from "src/pages/Product/components/ProductLayout/AccessoryDescription";
import { isGuitar } from "src/helpers/isGuitar";
import { Product } from "src/types/products";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import stylesClasses from "src/pages/Product/components/ProductLayout/styles.module.scss";

interface ProductLayoutProps {
  product: Product;
  favouriteButtonText: string;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleToggleFavouriteItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

const ProductLayout = ({
  product,
  favouriteButtonText,
  handleAddCartItem,
  handleToggleFavouriteItem,
}: ProductLayoutProps) => {
  return (
    <div className={stylesClasses.productWrapper}>
      <img
        src={product.image}
        alt={product.name}
        className={stylesClasses.productImage}
      />
      <div>
        <h1 className={stylesClasses.productTitle}>{product.name}</h1>
        <div className={stylesClasses.productMainBlock}>
          <div className={stylesClasses.productCharacteristics}>
            {isGuitar(product) ? (
              <GuitarDescription
                color={product.color}
                material={product.material}
                stringQuantity={product.stringQuantity}
                price={product.price.toFixed(2)}
              />
            ) : (
              <AccessoryDescription
                description={product.description}
                price={product.price.toFixed(2)}
              />
            )}
          </div>
          <div>
            <p className={stylesClasses.vendorCode}>
              Код: {product.vendorCode} (ID)
            </p>
            <button className={stylesClasses.quickBuyButton}>
              Купить в пару кликов
            </button>
          </div>
        </div>
        <div className={stylesClasses.belowButtonsBlock}>
          <button
            className={stylesClasses.belowButton}
            onClick={(event) =>
              handleToggleFavouriteItem(event, product.vendorCode)
            }
          >
            <img
              src={heartIcon}
              alt="Избранное"
              className={stylesClasses.buttonInnerIcon}
            />
            <br />
            {favouriteButtonText}
          </button>
          <button
            className={stylesClasses.belowButton}
            onClick={(event) => handleAddCartItem(event, product.vendorCode)}
          >
            <img
              src={cartIcon}
              alt="Корзина"
              className={stylesClasses.buttonInnerIcon}
            />
            <br />
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
