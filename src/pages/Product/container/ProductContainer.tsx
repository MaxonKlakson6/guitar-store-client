import { useParams } from "react-router-dom";

const ProductContainer = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ProductContainer;
