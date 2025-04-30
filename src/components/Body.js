import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromtedlabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineSatus";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <h1>Looks like you are offline you internet connection is not working</h1>
    );
  }

  const {
    filteredRestaurant,
    listofRestaurents,
    setlistofRestaurents,
    setfilteredRestaurant,
  } = useRestaurantInfo();

  const RestaurantCardPromoted = withPromtedlabel(RestaurantCard);

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-baseline">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-b-blue-600"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
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
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-blue-500 m-4 rounded-lg cursor-pointer"
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
        <div className="search m-4 p-4">
          <label className="font-bold px-2">User:</label>
          <input
            type="text"
            className="border border-solid border-b-blue-600"
            value={loggedInUser}
            onChange={(e) => {
              setUserInfo(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((rescard) => {
          return (
            <Link to={"restaurants/" + rescard.info.id} key={rescard.info.id}>
              {rescard.info.promoted ? (
                <RestaurantCardPromoted resData={rescard} />
              ) : (
                <RestaurantCard resData={rescard} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
