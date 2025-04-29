import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) => {
  const { info } = resData?.resData || {};
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    info || {};
  const { deliveryTime } = sla || {};
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
