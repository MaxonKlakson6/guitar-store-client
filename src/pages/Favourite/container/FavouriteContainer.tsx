import Loader from "src/components/UI/Loader";
import { useCart } from "src/hooks/useCart";
import { useFavourite } from "src/hooks/useFavourite";
import FavouriteLayout from "src/pages/Favourite/components/FavouriteLayout";

const FavouriteContainer = () => {
  const { favouriteList, isLoading, handleToggleFavouriteItem } =
    useFavourite();
  const { handleAddCartItem } = useCart();

  return (
    <Loader isLoading={isLoading}>
      <FavouriteLayout
        favouriteList={favouriteList}
        isLoading={isLoading}
        handleAddCartItem={handleAddCartItem}
        handleToggleFavouriteItem={handleToggleFavouriteItem}
      />
    </Loader>
  );
};

export default FavouriteContainer;
