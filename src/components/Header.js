import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Cart.js";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setHideHeader(true);
      console.log("home page");
    } else setHideHeader(false);
  }, [location.pathname]);

  return (
    <>
      {hideHeader ? (
        <div className="absolute top-0 left-0 m-4 gap-x-4 flex items-center">
          <img
            className="w-[30px] "
            src="./images/icon-menu-white.svg"
            onClick={() => {
              setShowNav(true);
            }}
          />
          <div className="mx-2">
            <img src="/images/logo.svg" />
          </div>
        </div>
      ) : null}
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
              className="hover:scale-105 duration-300"
              src="./images/icon-close.svg"
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
                navigate("/products");
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

      <div
        className={
          hideHeader == false
            ? "absolute w-full h-24 flex justify-center items-center bg-white"
            : "hidden"
        }
      >
        <div className="w-[80%] h-full border-b-2 border-slate-200 flex justify-between items-center">
          <div className="flex items-center gap-x-8">
            <div className="md:hidden  hover:cursor-pointer">
              <img
                className={
                  showNav
                    ? "rotate-90 hover:scale-110 transition-all duration-500"
                    : "hover:scale-110 transition-all duration-500"
                }
                src="./images/icon-menu.svg"
                onClick={() => {
                  setShowNav(true);
                }}
              />
            </div>
            <div className="mx-2">
              <img src="/images/logo.svg" />
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
                    navigate("/products");
                  }}
                >
                  Collections
                </li>

                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-4 relative">
            <div
              onClick={() => {
                if (showCart) {
                  setShowCart(false);
                } else setShowCart(true);
              }}
            >
              <img src="/images/cart.svg" />
            </div>
            <div>
              <img className="h-[36px]" src="/images/image-avatar.png" />
            </div>
            <Cart showCart={showCart} />
          </div>
        </div>
      </div>
    </>
  );
}
