import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineSatus";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const Body = () => {

  const [searchText, setsearchText] = useState("");

  const onlinestatus = useOnlineStatus();

  if(onlinestatus===false){
    return <h1>Looks like you are offline you internet connection is not working</h1>
  }

  const {filteredRestaurant,listofRestaurents,setlistofRestaurents,setfilteredRestaurant,} = useRestaurantInfo();

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
            setfilteredRestaurant(resp);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((rescard) => {
          return <Link to={'restaurants/'+rescard.info.id} key={rescard.info.id} ><RestaurantCard resData={rescard} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
