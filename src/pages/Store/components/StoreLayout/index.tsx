import ProductCard from "src/components/ProductCard";
import { GetAllGoodsResponse } from "src/pages/Store/types/storeResponses";
import styleClasses from "src/pages/Store/components/StoreLayout/styles.module.scss";

interface StoreLayoutProps {
  products: GetAllGoodsResponse;
}

const StoreLayout = ({ products }: StoreLayoutProps) => {
  return (
    <div className={styleClasses.wrapper}>
      <div className={styleClasses.filterHolder}></div>
      <div className={styleClasses.goodsHolder}>
        {products.guitars.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
        {products.accessories.map((accessory) => (
          <ProductCard
            key={accessory.id}
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
