import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartDisplay from "./CartDisplay";
import { CartContext } from "../components/CartContext";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [, cartItems, , , , , showCart, toggleShowCart] =
    useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let numItems = cartItems
      .map((item) => item.quantity)
      .reduce((sum, currentValue) => sum + currentValue, 0);
    setTotalQuantity(numItems);
  }, [cartItems]);

  useEffect(() => {
    if (location.pathname === "/") {
      setHideHeader(true);
    } else setHideHeader(false);
  }, [location.pathname]);

  return (
    <>
      {/*Home page Header*/}
      {hideHeader ? (
        <div className="w-full bg-black flex items-center h-[64px] p-0">
          <div
            onClick={() => {
              setShowNav(true);
            }}
          >
            <img alt="white-hamburger" src="/images/hamburger-menu-white.svg" />
          </div>
          <div className="mx-2">
            <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                fill="#ffffff"
                fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>
      ) : null}

      {/* Navbar*/}
      <div
        className={
          showNav
            ? "p-6 absolute left-0 top-0 h-full w-[300px] bg-white z-10 translate-x-0 transition-all duration-700"
            : "invisible translate-x-[-100%] transition-all duration-700 p-6 absolute left-0 top-0 h-full w-[300px] bg-white z-10"
        }
      >
        <div className="space-y-10">
          <div
            className="mb-4 hover:cursor-pointer "
            onClick={() => {
              setShowNav(false);
            }}
          >
            <img
              alt="close-icon"
              className="hover:scale-105 duration-300"
              src="/images/icon-close.svg"
            />
          </div>
          <ul className="flex flex-col gap-y-4 font-bold">
            <li
              onClick={() => {
                navigate("/");
                setShowNav(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/collection");
                setShowNav(false);
              }}
            >
              Collections
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/*Header 2 for all other pages*/}
      {hideHeader === false ? (
        <div
          className={
            hideHeader === false
              ? " w-full h-24 flex justify-center items-center bg-white"
              : "hidden"
          }
        >
          <div className="relative w-[80%] h-full border-b-2 border-slate-200 flex justify-between items-center md:static">
            <div className="flex items-center md:gap-x-8">
              <div className="min-w-[36px] md:hidden  hover:cursor-pointer">
                <img
                  className={
                    showNav
                      ? "rotate-90 hover:scale-110 transition-all duration-500"
                      : "hover:scale-110 transition-all duration-500"
                  }
                  alt="hamburger-menu-icon"
                  src="/images/icon-menu.svg"
                  onClick={() => {
                    setShowNav(true);
                  }}
                />
              </div>
              <div className="mx-2 min-w-[100px]">
                <img alt="company-logo" src="/images/logo.svg" />
              </div>
              <div>
                <ul className="hidden md:flex gap-x-8">
                  <li
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => {
                      navigate("/collection");
                    }}
                  >
                    Collections
                  </li>

                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-4 static md:relative">
              <div
                className="relative min-h-[36px] h-[36px] min-w-[36px] hover:cursor-pointer"
                onClick={() => {
                  if (showCart) {
                    toggleShowCart(false);
                  } else toggleShowCart(true);
                }}
              >
                <img alt="cart-icon" src="/images/cart.svg" />
                <div className="absolute -top-[10%] left-[45%] ">
                  <div className="bg-red-400 text-white rounded-full w-[18px] h-[18px] text-xs flex justify-center items-center">
                    {cartItems ? totalQuantity : null}
                  </div>
                </div>
              </div>
              <div>
                <img
                  alt="avatar-icon"
                  className="min-h-[36px] h-[36px] w-[36px] min-w-[36px]"
                  src="/images/image-avatar.png"
                />
              </div>
              <div
                className={
                  showCart
                    ? "absolute top-[160%] left-[calc(50%-140px)] md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white translate-y-0 transition-all duration-500 z-10 rounded-lg"
                    : "absolute md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white -translate-y-[15%]  hidden  z-10 rounded-lg"
                }
              >
                <CartDisplay showCart={showCart} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
