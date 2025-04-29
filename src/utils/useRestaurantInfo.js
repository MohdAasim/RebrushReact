import { useEffect,useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantInfo = ()=>{
    const [listofRestaurents, setlistofRestaurents] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(MENU_API);
        const json = await data.json();
    
        const restaurantCard = json?.data?.cards[1];
        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log(restaurants);
        if (restaurants) {
          setlistofRestaurents(restaurants);
          setfilteredRestaurant(restaurants);
        } else {
          console.log("Restaurants data not found in API response");
          setlistofRestaurents(resList); // or handle empty state
          setfilteredRestaurant(resList);
        }
      };

      return {listofRestaurents,filteredRestaurant,setlistofRestaurents,
        setfilteredRestaurant,}
}

export default useRestaurantInfo;