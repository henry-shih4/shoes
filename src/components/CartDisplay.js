import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { shoeCollection } from "./shoeCollection";
import { CartContext } from "../components/CartContext";

export default function CartDisplay(props) {
  const navigate = useNavigate();
  const [
    totalCost,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
    showCart,
    toggleShowCart,
  ] = useContext(CartContext);

  useEffect(() => {
    getTotalCost();
  }, [cartItems]);

  return (
    <>
      <div className="max-h-[400px] overflow-y-auto text-black">
        <div className="">
          <div className="flex justify-between items-center p-4">
            <div>Cart</div>
            <div
              onClick={() => {
                toggleShowCart(false);
              }}
            >
              <img alt="close-icon" src="/images/icon-close.svg" />
            </div>
          </div>
          <div className="w-full border border-slate-200 mb-4"></div>
          <div className="space-y-3">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
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
                        className="flex justify-center items-center hover:cursor-pointer"
                        onClick={() => {
                          removeItemFromCart(index);
                        }}
                      >
                        <img alt="trash-icon" src="/images/icon-delete.svg" />
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div className="w-full flex justify-center items-center">
                <p>Cart is empty.</p>
              </div>
            )}
          </div>
          <div>
            <div className="w-full text-center pt-1">
              Total: <span className="font-bold">${totalCost}</span>
            </div>
            <div className="w-full p-3">
              <button
                className="w-full bg-orange-400 font-raleway text-white rounded-lg py-2 hover:opacity-50 duration-500"
                onClick={() => {
                  navigate("/checkout");
                  toggleShowCart(false);
                }}
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
