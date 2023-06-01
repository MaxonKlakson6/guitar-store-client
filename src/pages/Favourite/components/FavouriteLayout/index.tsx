import { MouseEvent } from "react";

import ProductCard from "src/components/ProductCard";
import { FavouriteItem } from "src/types/products";
import noFavouriteImage from "src/static/images/noFavourite.webp";
import stylesClasses from "src/pages/Favourite/components/FavouriteLayout/styles.module.scss";

interface FavouriteLayout {
  favouriteList: FavouriteItem[];
  isLoading: boolean;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleToggleFavouriteItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

const FavouriteLayout = ({
  favouriteList,
  isLoading,
  handleAddCartItem,
  handleToggleFavouriteItem,
}: FavouriteLayout) => {
  if (favouriteList.length === 0 && !isLoading) {
    return (
      <div className={stylesClasses.nothingFavourite}>
        <h1>Список избранных товаров пуст...</h1>
        <img src={noFavouriteImage} alt="Ничего не нравиться" />
      </div>
    );
  }

  return (
    <div className={stylesClasses.favouriteWrapper}>
      <h1 className={stylesClasses.title}>Избранные товары</h1>
      <div className={stylesClasses.productsHolder}>
        {favouriteList.map((favouriteItem) => (
          <ProductCard
            key={favouriteItem.vendorCode}
            vendorCode={favouriteItem.vendorCode}
            productName={favouriteItem.name}
            price={favouriteItem.price}
            image={favouriteItem.image}
            isFavourite={true}
            handleAddCartItem={handleAddCartItem}
            handleToggleFavouriteItem={handleToggleFavouriteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteLayout;
