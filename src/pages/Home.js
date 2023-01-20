import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [activeShoe, setActiveShoe] = useState("orange");

  return (
    <>
      <div className="flex flex-col justify-center  items-center w-full h-max min-h-[calc(100vh-96px)] m-0 md:flex-row bg-black">
        <div className="absolute w-full h-full bg-black bg-cover bg-center bg-no-repeat -z-10 "></div>
        <div className="w-full min-w-1/2 h-4/5 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start">
          <div className="h-full justify-center w-full flex flex-col rounded-xl text-white text-center md:text-left  md:w-3/4">
            <div>
              <div className="font-bold text-6xl tracking-wide font-raleway">
                Unleash Your Potential.
              </div>
              <div className="text-xl">
                with our Superior Performance Footwear
              </div>
            </div>
            <div className="h-max min-w-[300px] max-w-[350px] flex justify-center items-center m-auto md:hidden">
              <img
                key={Math.random()}
                className="animate-fade min-w-[300px] flex justify-center items-center"
                src={`/images/hero-shoe-${activeShoe}.png`}
              />
            </div>
            <div>
              <p className="hidden text-sm italic text-shadow-lg shadow-slate-600 md:shadow-white md:text-shadow-none">
                Our athletic shoes are designed with advanced cushioning systems
                and support features to provide maximum comfort and stability
                during intense physical activity. Whether you're running,
                jumping, or lifting, our shoes will help you perform at your
                best
              </p>
              <div className="m-4 flex justify-center items-center md:justify-start">
                <button
                  className="w-[160px] h-[60px] bg-orange-500 rounded-lg font-bebas text-2xl tracking-widest border-slate-300 border-2"
                  onClick={() => {
                    navigate("/collection");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center hidden h-max md:block">
            <img
              key={Math.random()}
              className="min-w-[400px] transition-all animate-fade "
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
                className="w-[160px] md:w-[200px] hover:scale-105 cursor-pointer"
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
                className="w-[160px] md:w-[200px] hover:scale-105 cursor-pointer"
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
                className="w-[160px] md:w-[200px] hover:scale-105 cursor-pointer"
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
