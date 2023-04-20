import Filter from "src/pages/Store/components/Filter";
import ProductCard from "src/components/ProductCard";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";
import styleClasses from "src/pages/Store/components/StoreLayout/styles.module.scss";

interface StoreLayoutProps {
  category: string;
  products: GetAllGoodsResponse;
  loadGoods: (requestBody: GetGoodsRequest) => void;
}

const StoreLayout = ({ category, products, loadGoods }: StoreLayoutProps) => {
  return (
    <div className={styleClasses.wrapper}>
      <Filter category={category} loadGoods={loadGoods} />
      {products.guitars.length === 0 && products.accessories.length === 0 && (
        <h1>Ничего не найдено 😢</h1>
      )}
      <div className={styleClasses.goodsHolder}>
        {products.guitars.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
        {products.accessories.map((accessory) => (
          <ProductCard
            key={accessory.id}
            productId={accessory.id}
            productName={accessory.name}
            price={accessory.price}
            image={accessory.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreLayout;
