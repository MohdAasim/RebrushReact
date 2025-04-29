import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const json = await data.json();
    const restaurantCard = json?.data?.cards[1];
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setresinfo(restaurants[0]);
  };

  return resinfo;
};

export default useRestaurantMenu;
