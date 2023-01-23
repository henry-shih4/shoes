import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion as m } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [activeShoe, setActiveShoe] = useState("white");

  return (
    <>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        id="main-background"
        className="absolute top-[96px] flex flex-col justify-center  items-center w-screen min-w-[320px] h-max min-h-[calc(100vh-96px)] m-0  md:justify-center"
      >
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="mt-4 w-full min-w-1/2 h-4/5 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start md:mt-0">
            <div className="h-full justify-center w-full flex flex-col rounded-xl text-white text-center md:text-left  md:w-3/4">
              <div className="mb-3">
                <div className="text-4xl font-bold tracking-wide font-raleway md:text-6xl ">
                  Unleash Your Potential.
                </div>
                <div className="text-lg md:text-xl">
                  with our Superior Performance Footwear
                </div>
              </div>
              <div className="h-max min-w-[240px] max-w-[350px] flex justify-center items-center m-auto md:hidden">
                <img
                  key={Math.random()}
                  className=" min-w-[240px] flex justify-center items-center"
                  src={`/images/hero-shoe-${activeShoe}.png`}
                />
              </div>
              <div className="flex justify-center items-center md:justify-start">
                <div className="group w-max m-4 flex justify-center items-center">
                  <button
                    className="relative w-[160px] h-[60px] bg-orange-500 rounded-lg font-bebas text-2xl tracking-widest border-slate-300 border-2 hover:shadow-[inset_200px_0_0_0] hover:shadow-white duration-[400ms,800ms] transition-[color,box-shadow] hover:text-orange-500"
                    onClick={() => {
                      navigate("/collection");
                    }}
                  >
                    <div>SHOP NOW</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-y-6 py-4 md:flex-col">
            <div className="justify-center hidden items-center h-max md:flex">
              <m.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.25, ease: "easeOut" }}
                exit={{ opacity: 1 }}
                // key={Math.random()}
                className="min-w-[340px] "
                src={`/images/hero-shoe-${activeShoe}.png`}
              />
            </div>
            <div className="flex w-full justify-around items-center gap-x-6 ">
              <div
                onClick={() => {
                  if (activeShoe === "orange") {
                    setActiveShoe("white");
                  } else {
                    setActiveShoe("orange");
                  }
                }}
              >
                <img
                  className=" w-[120px] lg:w-[140px] hover:scale-105 duration-300 cursor-pointer"
                  src={
                    activeShoe === "orange"
                      ? "/images/hero-shoe-white.png"
                      : "/images/hero-shoe-orange.png"
                  }
                />
              </div>
              <div
                onClick={() => {
                  if (activeShoe === "red") {
                    setActiveShoe("white");
                  } else {
                    setActiveShoe("red");
                  }
                }}
              >
                <img
                  className="w-[120px] lg:w-[140px] hover:scale-105 duration-300  cursor-pointer"
                  src={
                    activeShoe === "red"
                      ? "/images/hero-shoe-white.png"
                      : "/images/hero-shoe-red.png"
                  }
                />
              </div>
              <div
                onClick={() => {
                  if (activeShoe === "blue") {
                    setActiveShoe("white");
                  } else {
                    setActiveShoe("blue");
                  }
                }}
              >
                <img
                  className="w-[120px] lg:w-[140px] hover:scale-105 duration-300  cursor-pointer"
                  src={
                    activeShoe === "blue"
                      ? "/images/hero-shoe-white.png"
                      : "/images/hero-shoe-blue.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
}
