import { useContext, useEffect } from "react";

import { CartContext } from "../components/CartContext";

export default function Checkout() {
  const [
    ,
    cartItems,
    ,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
    showCart,
  ] = useContext(CartContext);

  useEffect(() => {
    console.log(cartItems);
  });
  return (
    <>
      <div className="absolute top-[96px] bg-white flex flex-col justify-start items-center max-h-[calc(100vh-96px)] min-h-[calc(100vh-96px)] w-full md:justify-center">
        <div className="flex justify-center">Your Items</div>
        <div className="min-h-[300px] w-[90%] min-w-[320px] flex flex-col justify-center items-center ">
          <div className="space-y-3 w-full  min-w-[320px] max-w-[480px] max-h-full overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="flex px-3 justify-center w-full min-w-[300px]"
                    >
                      <div className="flex justify-center items-center w-2/5">
                        <img
                          alt={`item-${index}`}
                          className="h-[120px] rounded-lg"
                          src={item.image}
                        />
                      </div>
                      <div className="w-2/5 flex flex-col justify-center items-center text-center font-raleway text-sm">
                        <div className="w-full text-base font-bold">
                          {item.name}
                        </div>
                        <div className="space-y-1">
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
                      <div className="w-1/5 flex justify-center items-center">
                        <div
                          className="h-1/2 w-1/2 flex justify-center items-center hover:cursor-pointer"
                          onClick={() => {
                            removeOneFromCart(index);
                          }}
                        >
                          <img alt="minus-icon" src="/images/icon-minus.svg" />
                        </div>
                        <div
                          className="h-1/2 w-1/2 flex justify-center items-center hover:cursor-pointer"
                          onClick={() => {
                            removeItemFromCart(index);
                          }}
                        >
                          <img alt="trash-icon" src="/images/icon-delete.svg" />
                        </div>
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
        </div>
      </div>
    </>
  );
}
