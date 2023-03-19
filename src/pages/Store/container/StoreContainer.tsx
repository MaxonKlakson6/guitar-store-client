import { useSearchParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import StoreLayout from "src/pages/Store/components/StoreLayout";
import { useGetAllGoodsQuery } from "src/api/goodsApi";
import { getAllGoodsDefaultValue } from "src/constants/responseDefaultValues";

const StoreContainer = () => {
  const [params] = useSearchParams();
  const category = params.get("category") || "All";

  const { data: goods = getAllGoodsDefaultValue, isLoading } =
    useGetAllGoodsQuery();
  console.log(goods);

  return (
    <Loader isLoading={isLoading}>
      <StoreLayout products={goods} />
    </Loader>
  );
};

export default StoreContainer;
