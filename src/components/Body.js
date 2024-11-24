import RestaurantCard from "./RestaurantCard"; // Default import
import { useState } from "react";
import Shimmer from "./Shimmmer";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } =
    useFetchRestaurants();

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>You are offline!!☹️</h1>
        <h2>Please check your internet connection</h2>  
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="flex items-center m-4 p-4">
        <div>
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-0.5 bg-orange-400 rounded-md cursor-pointer"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="px-4 py-0.5 mx-8 bg-green-400 rounded-md cursor-pointer">
        <button
          onClick={() => {
            // filter the restaurant card and update the UI
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
        
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body; // Default export
