import { MouseEvent } from "react";

import Filter from "src/pages/Store/components/Filter";
import ProductCard from "src/components/ProductCard";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import styleClasses from "src/pages/Store/components/StoreLayout/styles.module.scss";

interface StoreLayoutProps {
  isLoadProducts: boolean;
  category: string;
  products: GetAllGoodsResponse;
  loadGoods: (requestBody: GetGoodsRequest) => void;
  handleAddCartItem: (
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
}: StoreLayoutProps) => {
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
            handleAddCartItem={handleAddCartItem}
          />
        ))}
        {products.accessories.map((accessory) => (
          <ProductCard
            key={accessory.id}
            vendorCode={accessory.vendorCode}
            productName={accessory.name}
            price={accessory.price}
            image={accessory.image}
            handleAddCartItem={handleAddCartItem}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreLayout;
