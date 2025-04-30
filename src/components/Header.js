import React, { useEffect,useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineSatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact,setbtnNameReact] = useState("login")
 const onlinestatus = useOnlineStatus();

 //to see the data form cart reducer
 const cartItems = useSelector((store)=>store.cart.items)

 const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
          onlinestatus:{onlinestatus? "✅" :"🔴"} 
        </li>
          <li className="px-4">
            <Link className="" to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li >
        <button className="login px-2 bg-amber-500 cursor-pointer" onClick={()=>{
          btnNameReact ==="login"?
          setbtnNameReact("logout"):
          setbtnNameReact("login")
        }}>
            {btnNameReact}
        </button>
        <Link to="/cart">
          <li className="px-4 font-bold text-xl">Cart ({cartItems.length} items)</li>
          </Link>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
