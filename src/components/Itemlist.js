import React from "react";
import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice.js";

const Itemlist = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        //dispatch an aciton for redux store storing data 
        dispatch(addItem(item))
    }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-amber-100 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>-Rs. {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button className="p-2 bg-white rounded-lg mx-8 cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
