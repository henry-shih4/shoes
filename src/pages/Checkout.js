import { useContext } from "react";
import { CartContext } from "../components/CartContext";

export default function Checkout() {
  const [, cartItems, , removeItemFromCart, , getTotalCost] =
    useContext(CartContext);

  return (
    <>
      <div className="flex justify-center items-center h-max min-h-[calc(100vh-96px)] w-full ">
        <div className="h-full  w-[90%] flex flex-col justify-center items-center ">
          <div>Your Items</div>
          <div className="space-y-3 w-1/2">
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
        </div>
      </div>
    </>
  );
}
