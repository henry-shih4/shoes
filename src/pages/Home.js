import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion as m, useScroll } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [activeShoe, setActiveShoe] = useState("white");
  const { scrollYProgress } = useScroll();

  const cardVariants = {
    offscreen: {
      y: 25,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        id="main-background"
        className="h-max w-screen bg-black"
      >
        <div className=" flex flex-col pt-[96px] min-h-screen justify-center items-center w-full  md:justify-center">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="flex flex-col justify-center items-center md:flex-row h-full">
              <div className="mt-4 w-full min-w-1/2 h-4/5 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start md:mt-0">
                <div className="h-full justify-center items-center w-full flex flex-col rounded-xl text-white text-center md:text-left  md:w-3/4">
                  <div className="mb-5 px-4 flex flex-col justify-center items-center">
                    <div className="text-3xl font-bold tracking-wide font-raleway md:text-6xl ">
                      Unleash Your Potential.
                    </div>
                    <div className="text-lg md:text-xl">
                      with our Superior Performance Footwear
                    </div>
                  </div>
                  <div className="h-max pb-4 min-w-[200px] max-w-[350px] flex justify-center items-center m-auto md:hidden">
                    <img
                      key={activeShoe}
                      className="min-w-[240px] flex justify-center items-center animate-fade"
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
              <div className="w-full flex flex-row justify-center items-center gap-y-6 py-4 md:flex-col">
                <div
                  className="animate-fade justify-center hidden items-center h-max md:flex"
                  key={activeShoe}
                >
                  <m.img
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1.25, ease: "easeOut" }}
                    // exit={{ opacity: 1 }}
                    className="min-w-[340px]"
                    src={`/images/hero-shoe-${activeShoe}.png`}
                  />
                </div>
                <div className="flex w-full justify-around items-center gap-x-6 md:w-[80%]">
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
          </div>
        </div>
        <div className=" h-screen w-screen flex justify-center items-start text-white">
          <div className="flex flex-col justify-center items-center gap-y-8 w-[80%] h-max ">
            <m.div
              initial={{ y: 300 }}
              whileInView={{ y: 50 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              className="flex gap-x-10 md:flex-row "
            >
              <div className="font-bold text-3xl text-center">designed</div>

              <div className="max-w-[400px]">
                <div>
                  with the latest technology to enhance performance, reduce the
                  risk of injury, and provide a comfortable experience.
                </div>
              </div>
            </m.div>
            <div className="flex gap-x-10 md:flex-row">
              <div className="font-bold text-3xl text-center">versatile</div>

              <div className="max-w-[400px]">
                <div>
                  for all forms of intense physical activity. running, jumping,
                  or lifting, our shoes will help you perform at your best.
                </div>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
}
