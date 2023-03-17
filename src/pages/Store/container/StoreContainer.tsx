import { useSearchParams } from "react-router-dom";

const StoreContainer = () => {
  const [params] = useSearchParams();
  const textToDisplay = params.get("category") || "All";

  return <div>{textToDisplay}</div>;
};

export default StoreContainer;
