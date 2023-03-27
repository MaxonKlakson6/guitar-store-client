import { useSearchParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import StoreLayout from "src/pages/Store/components/StoreLayout";
import { useLazyGetAllGoodsQuery } from "src/api/goodsApi";
import { getAllGoodsDefaultValue } from "src/constants/responseDefaultValues";
import { useEffect } from "react";

const StoreContainer = () => {
  const [params] = useSearchParams();
  const category = params.get("category") || "all";

  const [loadGoods, { data: goods = getAllGoodsDefaultValue, isLoading }] =
    useLazyGetAllGoodsQuery();

  useEffect(() => {
    loadGoods(category);
  }, [category]);

  return (
    <Loader isLoading={isLoading}>
      <StoreLayout products={goods} />
    </Loader>
  );
};

export default StoreContainer;
