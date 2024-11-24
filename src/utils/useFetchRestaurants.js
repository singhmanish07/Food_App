import { useState, useEffect } from "react";
import { CARD_API_URL } from "../utils/constants";

const useFetchRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(CARD_API_URL);
        const json = await data.json();
        const restaurants =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants || json?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants|| json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants;

        setListOfRestaurants(restaurants || []);
        setFilteredRestaurant(restaurants || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { listOfRestaurants, filteredRestaurant, setFilteredRestaurant };
};

export default useFetchRestaurants;