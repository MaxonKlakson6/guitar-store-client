import { MouseEvent } from "react";

import Filter from "src/pages/Store/components/Filter";
import ProductCard from "src/components/ProductCard";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import styleClasses from "src/pages/Store/components/StoreLayout/styles.module.scss";
import { FavouriteItem } from "src/types/products";
import { useAppSelector } from "src/hooks/reduxHooks";
import { favouriteSelector } from "src/store/selectors/favouriteSelector";

interface StoreLayoutProps {
  isLoadProducts: boolean;
  category: string;
  products: GetAllGoodsResponse;
  loadGoods: (requestBody: GetGoodsRequest) => void;
  handleAddCartItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
  handleToggleFavouriteItem: (
    event: MouseEvent<HTMLButtonElement>,
    vendorCode: number
  ) => void;
}

const StoreLayout = ({
  isLoadProducts,
  category,
  products,
  loadGoods,
  handleAddCartItem,
  handleToggleFavouriteItem,
}: StoreLayoutProps) => {
  const favouritesObject = useAppSelector(favouriteSelector);
  return (
    <div className={styleClasses.wrapper}>
      <Filter category={category} loadGoods={loadGoods} />
      {products.guitars.length === 0 &&
        products.accessories.length === 0 &&
        !isLoadProducts && <h1>Ничего не найдено 😥</h1>}
      <div className={styleClasses.goodsHolder}>
        {products.guitars.map((product) => (
          <ProductCard
            key={product.id}
            vendorCode={product.vendorCode}
            productName={product.name}
            price={product.price}
            image={product.image}
            isFavourite={!!favouritesObject[product.vendorCode]}
            handleAddCartItem={handleAddCartItem}
            handleToggleFavouriteItem={handleToggleFavouriteItem}
          />
        ))}
        {products.accessories.map((accessory) => (
          <ProductCard
            key={accessory.id}
            vendorCode={accessory.vendorCode}
            productName={accessory.name}
            price={accessory.price}
            image={accessory.image}
            isFavourite={!!favouritesObject[accessory.vendorCode]}
            handleAddCartItem={handleAddCartItem}
            handleToggleFavouriteItem={handleToggleFavouriteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreLayout;
