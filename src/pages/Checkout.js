import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import Lottie from "react-lottie-player";
import lottieJson from "../check.json";

export default function Checkout() {
  const [
    totalCost,
    cartItems,
    ,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
    showCart,
    ,
    clearCart,
  ] = useContext(CartContext);

  const [card, setCard] = useState();
  const [cardCompany, setCardCompany] = useState();
  const [name, setName] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [securityCode, setSecurityCode] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [showCheckoutSuccessModal, setShowCheckoutSuccessModal] =
    useState(false);

  useEffect(() => {
    getTotalCost();
  }, [cartItems]);

  function validateCardNo() {
    const visaCardNoRegex = /^(?:4[0-9]{15})$/;
    const masterCardNoRegex = /^(?:5[1-5][0-9]{14})$/;
    const discoverCardNoRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if (card && card.match(visaCardNoRegex)) {
      setCardCompany("visa");
    } else if (card && card.match(masterCardNoRegex)) {
      setCardCompany("masterCard");
    } else if (card && card.match(discoverCardNoRegex)) {
      setCardCompany("discover");
    } else setCardCompany("");
  }

  useEffect(() => {
    validateCardNo(card);
  }, [card]);

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    if (cartItems.length < 1) {
      setErrorMsg("cart is empty!");
      return;
    }
    if (
      !cardCompany ||
      (securityCode.length !== 3 && securityCode.length !== 4)
    ) {
      setErrorMsg("invalid card, please try again");
    } else {
      setShowCheckoutSuccessModal(true);
      clearCart();
      setName("");
      setCard("");
      setSecurityCode("");
      setMonth("");
      setYear("");
    }
  }

  return (
    <>
      <div
        className={
          showCheckoutSuccessModal
            ? "absolute top-[96px] bg-white flex flex-col justify-start items-center h-max min-h-[calc(100vh-96px)] w-screen  md:justify-center"
            : "absolute top-[96px] bg-white flex flex-col justify-start items-center h-max min-h-[calc(100vh-96px)] w-screen md:justify-center"
        }
      >
        {showCheckoutSuccessModal ? (
          <>
            <div className="absolute h-full w-full bg-slate-400 flex justify-center items-center opacity-70 top-50%"></div>
            <div className="absolute flex flex-col justify-center items-center top-50% text-green-500 bg-slate-200 h-[200px] w-[200px]">
              <div>Thank you! Your checkout is complete.</div>
              <div>
                <Lottie
                  loop={false}
                  animationData={lottieJson}
                  play
                  style={{ width: 150, height: 150 }}
                />
              </div>
              <div onClick={() => setShowCheckoutSuccessModal(false)}>
                <img src="/images/icon-close.svg" />
              </div>
            </div>
          </>
        ) : null}
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
        <div className="w-[320px] min-w-[300px] min-h-[200px] py-4 mb-4 bg-orange-300 flex justify-center items-center rounded-lg">
          <form
            onSubmit={(e) => {
              handleCheckoutSubmit(e);
            }}
            id="checkout-form"
            className="w-[320px] min-w-[300px] flex flex-col justify-center items-center gap-y-4"
          >
            <div className="flex flex-col w-[85%]">
              <label htmlFor="name">
                <p>Name on Card</p>
              </label>
              <input
                value={name}
                maxLength={32}
                required
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-[85%]">
              <label className="flex gap-x-3 " htmlFor="card-no">
                <p>Card Number</p>
                <div>
                  {cardCompany ? (
                    <img
                      alt="card-company-logo"
                      src={`/images/${cardCompany}-logo.svg`}
                    />
                  ) : null}
                </div>
              </label>
              <input
                maxLength={16}
                required
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
                <label htmlFor="expiration">
                  <p>Expiration (mm/yy)</p>
                </label>
                <div id="expiration" className="flex space-x-3">
                  <select
                    required
                    id="month"
                    className="w-1/2"
                    onChange={(e) => {
                      setMonth(e.target.value);
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select
                    required
                    id="year"
                    className="w-1/2"
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  >
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="25">26</option>
                    <option value="25">27</option>
                    <option value="25">28</option>
                  </select>
                </div>
              </div>
              <div
                className="w-1/2 flex flex-col justify-center items-center"
                onChange={(e) => {
                  setSecurityCode(e.target.value);
                }}
              >
                <label htmlFor="security-code">
                  <p>Security Code</p>
                </label>
                <input
                  value={securityCode}
                  maxLength={4}
                  required
                  id="security-code"
                  name="security-code"
                  className="w-1/2"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <div>{errorMsg ? <div>{errorMsg}</div> : null}</div>
              <button className="w-[120px] bg-blue-500 font-raleway text-white rounded-lg py-2 hover:opacity-50 duration-500">
                Checkout
              </button>
              <p className="text-xs">
                test only, dont enter real credit card information
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
