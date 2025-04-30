import React,{useState} from "react";
import Itemlist from "./Itemlist";

const Restaurantcategory = ({ data,show,setshowIndex }) => {

    const handleclick =()=>{
        setshowIndex(); 
    }
  return (
    <div className="w-6/12 bg-pink-100 mx-auto shadow-lg p-4 my-4 cursor-pointer"onClick={handleclick}>
      <div className="flex justify-between" >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      {show &&<Itemlist items={data.itemCards} />}

    </div>
  );
};

export default Restaurantcategory;
