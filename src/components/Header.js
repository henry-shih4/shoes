import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart.js";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div className=" w-full h-24 flex justify-center items-center bg-white">
        <div
          className={
            showNav
              ? "p-6 absolute left-0 top-0 h-full w-1/2 bg-white z-10 translate-x-0 transition-all duration-700"
              : "invisible translate-x-[-100%] transition-all duration-700 p-6 absolute left-0 top-0 h-full w-1/2 bg-white z-10"
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
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
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
              <ul className="hidden md:flex gap-x-4">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
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
