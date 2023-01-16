import { useEffect, useState, useContext } from "react";
import { shoeCollection } from "./shoeCollection";
import { CartContext } from "../components/CartContext";

export default function CartDisplay(props) {
  const { showCart } = props;
  const [
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
  ] = useContext(CartContext);

  return (
    <>
      <div className="max-h-[400px] overflow-y-auto">
        <div className="">
          <div className="p-4">Cart</div>
          <div className="w-full border border-slate-200 mb-4"></div>
          <div className="space-y-3">
            {cartItems.length > 0
              ? cartItems.map((item, index) => {
                  return (
                    <>
                      <div className="flex px-3 justify-between" key={index}>
                        <div className="flex justify-center items-center 1/3-full">
                          <img
                            className="h-[80px] rounded-lg"
                            src={item.image}
                          />
                        </div>
                        <div className="w-2/3 flex flex-col justify-around items-center text-center font-raleway text-sm">
                          <div className="w-full">{item.name}</div>
                          <div>
                            <div>Colorway {item.variation}</div>
                            <div>
                              Quantity:{" "}
                              <span className="font-bold">{item.quantity}</span>
                            </div>
                            <div>
                              Price:{" "}
                              <span className="font-bold">
                                ${item.quantity * item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>{}</div>
                    </>
                  );
                })
              : "Cart is empty."}
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
