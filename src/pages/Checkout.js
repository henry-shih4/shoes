import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";

export default function Checkout() {
  const [
    totalCost,
    cartItems,
    ,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
    showCart,
  ] = useContext(CartContext);

  const [card, setCard] = useState();
  const [cardCompany, setCardCompany] = useState();

  // useEffect(() => {
  //   console.log(cartItems);
  // });

  useEffect(() => {
    getTotalCost();
  }, [cartItems]);

  function validateCard() {
    const visaCardNoRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const masterCardNoRegex = /^(?:5[1-5][0-9]{14})$/;
    const discoverCardNoRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (card && card.match(visaCardNoRegex)) {
      setCardCompany("Visa");
    } else if (card && card.match(masterCardNoRegex)) {
      setCardCompany("MasterCard");
    } else if (card && card.match(discoverCardNoRegex)) {
      setCardCompany("Discover");
    } else setCardCompany("");
  }

  useEffect(() => {
    validateCard(card);
  }, [card]);

  useEffect(() => {
    console.log(cardCompany);
  });

  function handleCheckoutSubmit() {}

  return (
    <>
      <div className="absolute top-[96px] bg-white flex flex-col justify-start items-center h-max min-h-[calc(100vh-96px)] w-screen md:justify-center">
        <div className="flex justify-center font-raleway text-xl py-4">
          Your Items
        </div>
        <div className="min-h-[300px] w-[90%] min-w-[320px] flex flex-col justify-center items-center ">
          <div className="space-y-3 w-full  min-w-[320px] max-w-[480px] h-max max-h-full overflow-y-auto">
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
          <div className="my-2">
            Total: <span className="font-bold">${totalCost}</span>
          </div>
        </div>
        <div className="w-[320px] min-w-[300px] min-h-[200px] bg-orange-300 flex justify-center items-center rounded-lg">
          <form
            id="checkout-form"
            className="w-[320px] min-w-[300px] flex flex-col justify-center items-center"
          >
            <div className="flex flex-col w-[85%]">
              <label forHTML="name">
                <p>Name</p>
              </label>
              <input type="text" />
            </div>
            <div className="flex flex-col w-[85%]">
              <label className="flex gap-x-3 " forHTML="card-no">
                <p>Card Number</p>
                <div>{cardCompany}</div>
              </label>
              <input
                type="text"
                id="card-no"
                value={card}
                onChange={(e) => {
                  setCard(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <label forHTML="expiration">
                  <p>Expiration (mm/yy)</p>
                </label>
                <input id="expiration" name="expiration" className="w-1/2" />
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center">
                <label forHTML="security-code">
                  <p>Security Code</p>
                </label>
                <input
                  id="security-code"
                  name="security-code"
                  className="w-1/2"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="py-4">
          <button
            className="w-[120px] bg-orange-400 font-raleway text-white rounded-lg py-2 hover:opacity-50 duration-500"
            onClick={() => {
              handleCheckoutSubmit();
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
