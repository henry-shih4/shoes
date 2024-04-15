import { useContext, useEffect, useState, useCallback } from "react";
import { CartContext } from "../components/CartContext";
import { LoginContext } from "../Context/LoginContext";
import Lottie from "react-lottie-player";
import lottieJson from "../check.json";
import axios from "axios";

export default function Checkout() {
  const [
    totalCost,
    cartItems,
    ,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
    ,
    ,
    clearCart,
  ] = useContext(CartContext);

  const [activeUser, ,] = useContext(LoginContext);
  const [card, setCard] = useState("");
  const [cardCompany, setCardCompany] = useState();
  const [name, setName] = useState("");
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [securityCode, setSecurityCode] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [showCheckoutSuccessModal, setShowCheckoutSuccessModal] =
    useState(false);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  let token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    getTotalCost();
  }, [cartItems, getTotalCost]);

  const validateCardNo = useCallback(() => {
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
  }, [card]);

  useEffect(() => {
    validateCardNo(card);
  }, [card, validateCardNo]);

  async function addOrder(items) {
    try {
      const response = await axios.post(
        "https://rebound-shoes-api.adaptable.app/api/v1/orders",
        {
          products: items,
          user: activeUser._id,
          totalPrice: totalCost,
        },
        { headers }
      );
      console.log("Order successful:", response.data);
      setShowCheckoutSuccessModal(true);
      clearCart();
      setName("");
      setCard("");
      setSecurityCode("");
      setMonth("");
      setYear("");
    } catch (error) {
      console.log(error);
      setError("Login to perform checkout.");
    }
  }

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
      addOrder(cartItems);
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
            <div className="absolute h-full w-full bg-slate-400 flex justify-center items-center opacity-70 "></div>
            <div className="absolute flex flex-col justify-center items-center bottom-[50%] text-green-500 bg-slate-200 h-[max]  w-[240px]">
              <div
                className="w-full flex justify-end p-2"
                onClick={() => setShowCheckoutSuccessModal(false)}
              >
                <img
                  alt="close-icon"
                  className="hover:cursor-pointer"
                  src="/images/icon-close.svg"
                />
              </div>
              <div className="text-center w-full">
                Thank you! Your checkout is complete.
              </div>
              <div>
                <Lottie
                  loop={false}
                  animationData={lottieJson}
                  play
                  style={{ width: 150, height: 150 }}
                />
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
                  <div
                    key={index}
                    className="flex px-3 justify-center w-full min-w-[300px]"
                  >
                    <div className="flex justify-center items-center w-2/5">
                      <img
                        crossorigin="anonymous"
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
        <div className="w-[320px] min-w-[300px] min-h-[200px] py-4 mb-4 bg-orange-300 flex justify-center items-center rounded-lg md:w-full">
          <form
            onSubmit={(e) => {
              handleCheckoutSubmit(e);
            }}
            id="checkout-form"
            className="w-[320px] min-w-[300px] flex flex-col justify-center items-center gap-y-4 md:min-w-[500px] md:px-4 "
          >
            <div className="flex flex-col md:flex-row w-[90%] gap-y-4 md:gap-x-10">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-[85%] text-center mb-2 underline">
                  Shipping Information
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="address">
                    <p>Address</p>
                  </label>
                  <input
                    value={address}
                    maxLength={50}
                    required
                    type="text"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <label htmlFor="city">
                    <p>City</p>
                  </label>
                  <input
                    value={city}
                    maxLength={50}
                    required
                    type="text"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />

                  <label htmlFor="state">
                    <p>State</p>
                  </label>
                  <input
                    value={state}
                    maxLength={50}
                    required
                    type="text"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                  />
                  <label htmlFor="zipcode">
                    <p>Zipcode</p>
                  </label>
                  <input
                    value={zipcode}
                    maxLength={11}
                    required
                    type="text"
                    onChange={(e) => {
                      setZipcode(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col w-[85%] text-center mb-2 underline">
                  Payment Information
                </div>
                <div className="flex flex-col w-full">
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
                <div className="flex flex-col w-full">
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
                <div className="flex justify-center items-center w-full">
                  <div className="w-1/2 flex flex-col justify-center items-center h-[60px]">
                    <label htmlFor="expiration">
                      <p className="text-sm">
                        Exp <span className="text-xs">(mm/yy)</span>
                      </p>
                    </label>
                    <div id="expiration" className="flex space-x-3">
                      <select
                        required
                        id="month"
                        value={month}
                        className="w-1/2 h-[28px] text-sm"
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
                        value={year}
                        id="year"
                        className="w-1/2 text-sm"
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
                  <div className="w-1/2 flex flex-col justify-center items-center h-[60px]">
                    <label
                      className="flex justify-center items-center h-[32px]"
                      htmlFor="security-code"
                    >
                      <p className="text-sm">Security Code</p>
                    </label>
                    <input
                      value={securityCode}
                      maxLength={4}
                      required
                      id="security-code"
                      name="security-code"
                      className="w-1/2 h-[28px] text-sm"
                      onChange={(e) => {
                        setSecurityCode(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email">
                    <p>Email</p>
                  </label>
                  <input
                    value={email}
                    maxLength={50}
                    required
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
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
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </div>
    </>
  );
}
