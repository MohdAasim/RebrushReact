import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
  const { info } = resData?.resData || {};
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    info || {};
  const { deliveryTime } = sla || {};
  return (
    <div className="m-4 p-4 w-[250px] bg-amber-300 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-red-500">{name}</h3>
      <h4 className="text-red-500">{cuisines.join(", ")}</h4>
      <h4 className="text-red-500">{avgRating}</h4>
      <h4 className="text-red-500">{costForTwo}</h4>
      <h4 className="text-red-500">{deliveryTime} minutes</h4>
    </div>
  );
};

// high order component takes component return modified component
//high order fucntion are pure function  because it doesnot change it in passed comoponent
export const withPromtedlabel = (RestaurantCard) => {
  //receive our props over here
  return (resData) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...resData} />
      </div>
    );
  };
};

export default RestaurantCard;
