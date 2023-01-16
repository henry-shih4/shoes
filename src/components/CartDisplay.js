import { useEffect, useState, useContext } from "react";
import { shoeCollection } from "./shoeCollection";
import { CartContext } from "../components/CartContext";

export default function CartDisplay(props) {
  const { showCart } = props;

  const [
    totalCost,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
  ] = useContext(CartContext);

  useEffect(() => {
    getTotalCost();
  }, [cartItems]);

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
                      <div key={index} className="flex px-3 justify-center">
                        <div className="flex justify-center items-center w-1/3">
                          <img
                            alt={`item-${index}`}
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
                        <div
                          className=""
                          onClick={() => {
                            removeItemFromCart(index);
                          }}
                        >
                          <img alt="close-icon" src="/images/icon-close.svg" />
                        </div>
                      </div>
                    </>
                  );
                })
              : "Cart is empty."}
          </div>
          <div>
            <div>
              Total: <span className="font-bold">{totalCost}</span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
