import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist.js";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(clearCart());
  };

  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-amber-200 cursor-pointer rounded-lg"
        onClick={handleclick}
      >
        clear cart
      </button>
      <div className="w-6/12 m-auto bg-pink-100">
        {cartItem.length === 0 && (
          <h1>Please Eat something for that add to you cart</h1>
        )}
        <Itemlist items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
