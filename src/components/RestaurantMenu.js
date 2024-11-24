import Shimmer from "./Shimmmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return;
  <Shimmer />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>⭐{avgRating}</h3>
      <h3>{totalRatingsString}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || 249}
            /-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
