import { isGuitar } from "src/helpers/isGuitar";
import { Product } from "src/types/products";
import heartIcon from "src/static/icons/heart.png";
import cartIcon from "src/static/icons/cart.png";
import stylesClasses from "src/pages/Product/components/ProductLayout/styles.module.scss";
import GuitarDescription from "./GuitarDescription";
import AccessoryDescription from "./AccessoryDescription";

interface ProductLayoutProps {
  product: Product;
}

const ProductLayout = ({ product }: ProductLayoutProps) => {
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
                price={product.price}
              />
            ) : (
              <AccessoryDescription
                description={product.description}
                price={product.price}
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
          <button className={stylesClasses.belowButton}>
            <img
              src={heartIcon}
              alt="Добавить в избранное"
              className={stylesClasses.buttonInnerIcon}
            />
            <br />
            Добавить в избранные
          </button>
          <button className={stylesClasses.belowButton}>
            <img
              src={cartIcon}
              alt="Добавить в корзину"
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
