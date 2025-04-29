import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurents, setlistofRestaurents] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    const restaurantCard = json?.data?.cards[1];
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants) {
      setlistofRestaurents(restaurants);
      setfilteredRestaurant(restaurants);
    } else {
      console.log("Restaurants data not found in API response");
      setlistofRestaurents(resList); // or handle empty state
      setfilteredRestaurant(resList);
    }
  };

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filtered = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const resp = listofRestaurents.filter(
              (res) => res.info.avgRating > 4.3
            );
            setlistofRestaurents(resp);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((rescard) => {
          return <RestaurantCard key={rescard.info.id} resData={rescard} />;
        })}
      </div>
    </div>
  );
};

export default Body;
