import React,{useState} from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Restaurantcategory from "./Restaurantcategory";

const RestaurantMenu = () => {
  const param = useParams();
  const resinfo = useRestaurantMenu(param.resid);
  const [showIndex,setshowIndex] =useState(null);
  let info;
  let categories;
  if (resinfo) {
    info = resinfo[2].card.card.info;
    categories = resinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  }
  // const { info } = resinfo[2]?.card?.card || {};
  const { name, cuisines, costForTwo } = info || {};

  return resinfo == null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      {categories.map((category,index)=><Restaurantcategory data={category.card.card} key={category.card.card.categoryId} show={showIndex===index}
      setshowIndex={()=>setshowIndex(showIndex === index ? null : index) }
      />)}
    </div>
  );
};

export default RestaurantMenu;
