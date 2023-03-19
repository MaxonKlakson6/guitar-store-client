import { useSearchParams } from "react-router-dom";

import Loader from "src/components/UI/Loader";
import StoreLayout from "src/pages/Store/components/StoreLayout";
import { useGetAllGoodsQuery } from "src/api/goodsApi";

const StoreContainer = () => {
  const [params] = useSearchParams();
  const textToDisplay = params.get("category") || "All";

  const { data: goods = [], isLoading } = useGetAllGoodsQuery();

  return (
    <Loader isLoading={isLoading}>
      <StoreLayout />
    </Loader>
  );
};

export default StoreContainer;
