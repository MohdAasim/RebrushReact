import { useState, useEffect } from "react";
import {RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (id) => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU+id);
    const json = await data.json();
    const restaurantCard = json?.data?.cards;
    // const restaurants =
    //   restaurantCard?.card
     setresinfo(restaurantCard);
  };

  return resinfo;
};

export default useRestaurantMenu;
