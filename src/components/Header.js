import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CartDisplay from "./CartDisplay";

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
      {/*Home page Header*/}
      {hideHeader ? (
        <div className="absolute top-0 left-0 m-4 gap-x-4 flex items-center">
          <img
            className="w-[30px] "
            src="/images/icon-menu.svg"
            onClick={() => {
              setShowNav(true);
            }}
          />
          <div className="mx-2">
            <img src="/images/logo.svg" />
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
      <div
        className={
          hideHeader == false
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
                src="/images/icon-menu.svg"
                onClick={() => {
                  setShowNav(true);
                }}
              />
            </div>
            <div className="mx-2 min-w-[100px]">
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
              className="min-h-[36px] h-[36px] min-w-[36px]"
              onClick={() => {
                if (showCart) {
                  setShowCart(false);
                } else setShowCart(true);
              }}
            >
              <img src="/images/cart.svg" />
            </div>
            <div>
              <img
                className="min-h-[36px] h-[36px] w-[36px] min-w-[36px]"
                src="/images/image-avatar.png"
              />
            </div>
            <div
              className={
                showCart
                  ? "absolute top-[200%] left-[25%] md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white translate-y-0 transition-all duration-500 z-10 rounded-lg"
                  : "absolute md:top-[120%] md:-left-[150%] h-max w-[280px] shadow-xl bg-white -translate-y-[15%]  hidden  z-10 rounded-lg"
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
