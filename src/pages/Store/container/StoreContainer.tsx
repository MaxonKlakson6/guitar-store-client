import { useSearchParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import StoreLayout from "src/pages/Store/components/StoreLayout";
import { useLazyGetAllGoodsQuery } from "src/api/goodsApi";
import { getAllGoodsDefaultValue } from "src/constants/responseDefaultValues";
import { GetGoodsRequest } from "src/pages/Store/types/storeRequests";

const StoreContainer = () => {
  const [params] = useSearchParams();
  const category = params.get("category") || "all";
  const [trigger, { data: goods = getAllGoodsDefaultValue, isLoading }] =
    useLazyGetAllGoodsQuery();

  const loadGoods = (requestBody: GetGoodsRequest) => {
    trigger(requestBody);
  };

  return (
    <Loader isLoading={isLoading}>
      <StoreLayout category={category} products={goods} loadGoods={loadGoods} />
    </Loader>
  );
};

export default StoreContainer;
