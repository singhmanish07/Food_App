import { CDN_URL } from "../utils/constants";   // Named import


const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="m-[10px] p-[9px] w-[285px] h-[420px] rounded-3xl bg-white hover:border-2 hover:border-black hover:bg-gray-200">
      <img
        className="h-[250px] w-[100%] rounded-3xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>
        ⭐{avgRating} • {deliveryTime} mins
      </h4>
    </div>
  );
};


export default RestaurantCard;    // Default export