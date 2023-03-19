import ProductCard from "src/components/ProductCard";
import { Guitar } from "src/types/products";
import styleClasses from "src/pages/Store/components/StoreLayout/styles.module.scss";

interface StoreLayoutProps {
  products: Guitar[];
}

const StoreLayout = ({ products }: StoreLayoutProps) => {
  return (
    <div className={styleClasses.wrapper}>
      <div className={styleClasses.filterHolder}></div>
      <div className={styleClasses.goodsHolder}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreLayout;
