import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [activeShoe, setActiveShoe] = useState("orange");

  return (
    <>
      <div className="flex flex-col justify-center  items-center w-full h-max min-h-[calc(100vh-64px)] m-0 md:flex-row ">
        <div className="absolute h-[calc(100%-64px)] w-full bg-main bg-cover bg-center bg-no-repeat -z-10 brightness-50"></div>
        <div className="w-full min-w-1/2 h-4/5 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start">
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
                className="animate-fade min-w-[240px] flex justify-center items-center"
                src={`/images/hero-shoe-${activeShoe}.png`}
              />
            </div>
            <div className="flex justify-center items-center md:justify-start">
              <p className="hidden text-sm italic text-shadow-lg shadow-slate-600 md:shadow-white md:text-shadow-none">
                Our athletic shoes are designed with advanced cushioning systems
                and support features to provide maximum comfort and stability
                during intense physical activity. Whether you're running,
                jumping, or lifting, our shoes will help you perform at your
                best
              </p>
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
        <div className="flex flex-col justify-center items-center">
          <div className="justify-center hidden items-center h-max md:flex">
            <img
              key={Math.random()}
              className="min-w-[340px] transition-all animate-fade "
              src={`/images/hero-shoe-${activeShoe}.png`}
            />
          </div>
          <div className="flex justify-center items-center w-full flex-wrap">
            <div
              onClick={() => {
                if (activeShoe === "white-and-black") {
                  setActiveShoe("orange");
                } else {
                  setActiveShoe("white-and-black");
                }
              }}
            >
              <img
                className=" w-[120px] md:w-[180px] hover:scale-105 duration-300 cursor-pointer"
                src={
                  activeShoe === "white-and-black"
                    ? "/images/hero-shoe-orange.png"
                    : "/images/hero-shoe-white-and-black.png"
                }
              />
            </div>
            <div
              onClick={() => {
                if (activeShoe === "red") {
                  setActiveShoe("orange");
                } else {
                  setActiveShoe("red");
                }
              }}
            >
              <img
                className="w-[120px] md:w-[180px] hover:scale-105 duration-300  cursor-pointer"
                src={
                  activeShoe === "red"
                    ? "/images/hero-shoe-orange.png"
                    : "/images/hero-shoe-red.png"
                }
              />
            </div>
            <div
              onClick={() => {
                if (activeShoe === "blue") {
                  setActiveShoe("orange");
                } else {
                  setActiveShoe("blue");
                }
              }}
            >
              <img
                className="w-[120px] md:w-[180px] hover:scale-105 duration-300  cursor-pointer"
                src={
                  activeShoe === "blue"
                    ? "/images/hero-shoe-orange.png"
                    : "/images/hero-shoe-blue.png"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
