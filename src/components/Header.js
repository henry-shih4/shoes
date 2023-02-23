import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import CartDisplay from "./CartDisplay";
import { CartContext } from "../components/CartContext";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [, cartItems, , , , , showCart, toggleShowCart] =
    useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let numItems = cartItems
      .map((item) => item.quantity)
      .reduce((sum, currentValue) => sum + currentValue, 0);
    setTotalQuantity(numItems);
  }, [cartItems]);

  return (
    <>
      {/* Navbar*/}
      <div
        className={
          showNav
            ? "p-6 fixed top-0 w-1/2 h-full bg-white z-[100] translate-x-0 transition duration-700 "
            : "translate-x-[-100%] p-6 fixed  top-0 h-full w-1/2 bg-white z-[100]  transition duration-700"
        }
      >
        <div className="space-y-10">
          <div
            className="mb-4 w-[20px] hover:cursor-pointer"
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
          </ul>
        </div>
      </div>

      {/*Header for all pages*/}
      <div
        className={
          "absolute top-0 w-full h-24 flex justify-center items-center bg-[#000] text-white z-50"
        }
      >
        <div className="relative w-full h-full flex justify-between items-center md:absolute">
          <div className="flex items-center h-full gap-x-4 md:gap-x-8">
            <div className="min-w-[36px] md:hidden  hover:cursor-pointer">
              <img
                className={
                  showNav
                    ? "rotate-90 hover:scale-110 transition-all duration-500"
                    : "hover:scale-110 transition-all duration-500"
                }
                alt="hamburger-menu-icon"
                src="/images/hamburger-menu-white.svg"
                onClick={() => {
                  setShowNav(true);
                }}
              />
            </div>
            <div
              className="mx-2 min-w-[100px] hover:cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <img alt="company-logo" src="/images/logo.svg" />
            </div>
            <div className="h-full">
              <ul className="h-full hidden  md:flex justify-center items-center gap-x-4">
                <li
                  className="rounded-lg flex justify-center items-center hover:bg-white hover:text-black h-[50%] w-[100px] transition-all duration-[500ms]"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className="rounded-lg flex justify-center items-center hover:bg-white hover:text-black h-[50%] w-[100px] transition-all duration-[500ms]"
                  onClick={() => {
                    navigate("/collection");
                  }}
                >
                  Collections
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-[80px] flex gap-x-4 static md:relative">
            <div
              className="relative min-h-[36px] h-[36px] min-w-[36px] hover:cursor-pointer"
              onClick={() => {
                if (showCart) {
                  toggleShowCart(false);
                } else toggleShowCart(true);
              }}
            >
              <img
                alt="cart-icon"
                className="h-[36px] w-[36px]"
                src="/images/cart-white.svg"
              />
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
                  ? "absolute top-[160%] left-[calc(50%-140px)] md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white translate-y-0 transition-all duration-500 z-50 rounded-lg"
                  : "absolute md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white -translate-y-[15%]  hidden  z-50 rounded-lg"
              }
            >
              <CartDisplay showCart={showCart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
