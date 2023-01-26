import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion as m, useAnimation } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [activeShoe, setActiveShoe] = useState("white");
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [email, setEmail] = useState();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      control.start("show");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        id="main-background"
        className="h-max w-screen bg-slate-400"
      >
        <div className=" flex flex-col pt-[96px] min-h-screen justify-center items-center w-full  md:justify-center text-white">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="flex flex-col justify-center items-center md:flex-row h-full">
              <div className="mt-4 w-full min-w-1/2 h-4/5 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start md:mt-0">
                <div className="h-full justify-center items-center w-full flex flex-col rounded-xl  text-center md:text-left  md:w-3/4">
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
                      alt="hero-shoe"
                      key={activeShoe}
                      className="min-w-[240px] max-h-[200px] flex justify-center items-center animate-fade"
                      src={`/images/hero-shoe-${activeShoe}.png`}
                    />
                  </div>
                  <div className="flex justify-center items-center md:justify-start">
                    <div className="group w-max m-4 flex justify-center items-center">
                      <button
                        className="relative w-[160px] h-[60px] bg-orange-400 rounded-lg font-bebas text-2xl tracking-widest border-slate-300 border-2 hover:shadow-[inset_200px_0_0_0] hover:shadow-white duration-[400ms,800ms] transition-[color,box-shadow] hover:text-orange-500"
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
                    alt="hero-shoe"
                    className="min-w-[340px] max-h-[300px]"
                    src={`/images/hero-shoe-${activeShoe}.png`}
                  />
                </div>
                <div className="flex w-full justify-around items-center gap-x-6 md:w-[80%]">
                  <m.div
                    initial={{ x: "500%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                    onClick={() => {
                      if (activeShoe === "orange") {
                        setActiveShoe("white");
                      } else {
                        setActiveShoe("orange");
                      }
                    }}
                  >
                    <img
                      alt="hero-shoe-org"
                      className=" w-[120px] lg:w-[140px] hover:scale-105 duration-300 cursor-pointer"
                      src={
                        activeShoe === "orange"
                          ? "/images/hero-shoe-white.png"
                          : "/images/hero-shoe-orange.png"
                      }
                    />
                  </m.div>
                  <m.div
                    initial={{ x: "300%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1.25, delay: 0.5, ease: "easeOut" }}
                    onClick={() => {
                      if (activeShoe === "red") {
                        setActiveShoe("white");
                      } else {
                        setActiveShoe("red");
                      }
                    }}
                  >
                    <img
                      alt="hero-shoe-red"
                      className="w-[120px] lg:w-[140px] hover:scale-105 duration-300  cursor-pointer"
                      src={
                        activeShoe === "red"
                          ? "/images/hero-shoe-white.png"
                          : "/images/hero-shoe-red.png"
                      }
                    />
                  </m.div>
                  <m.div
                    initial={{ x: "200%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      duration: 1.25,
                      delay: 0.75,
                      ease: "easeOut",
                    }}
                    onClick={() => {
                      if (activeShoe === "blue") {
                        setActiveShoe("white");
                      } else {
                        setActiveShoe("blue");
                      }
                    }}
                  >
                    <img
                      alt="hero-shoe-blue"
                      className="w-[120px] lg:w-[140px] hover:scale-105 duration-300  cursor-pointer"
                      src={
                        activeShoe === "blue"
                          ? "/images/hero-shoe-white.png"
                          : "/images/hero-shoe-blue.png"
                      }
                    />
                  </m.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-screen w-screen flex flex-col justify-start items-center text-white ">
          <div className="pt-4 mb-4 flex flex-col justify-center items-center w-[80%] h-max">
            <m.div
              variants={container}
              initial="hidden"
              animate={control}
              ref={ref}
              className="space-y-8"
            >
              <m.div
                variants={item}
                className="w-full flex flex-col justify-center items-center md:flex-row md:items-start"
              >
                <div className="w-full text-xl font-bold text-center mr-4 md:text-3xl md:w-1/3">
                  designed
                </div>

                <div className="w-[320px] text-center md:text-left md:w-2/3 md: max-w-[400px]">
                  with the latest technology to enhance performance, reduce the
                  risk of injury, and provide a comfortable experience.
                </div>
              </m.div>
              <m.div
                variants={item}
                className="pt-2 flex flex-col justify-center items-center md:flex-row md:items-start"
              >
                <div className="w-full font-bold text-xl text-center mr-4 md:text-3xl md:w-1/3">
                  versatile
                </div>

                <div className="w-[320px] text-center md:text-left md:w-2/3 md: max-w-[400px]">
                  for all forms of intense physical activity. While running,
                  jumping, or lifting, our shoes will help you perform at your
                  best.
                </div>
              </m.div>
              <m.div
                variants={item}
                className="pt-2 flex flex-col justify-center items-center w-max md:flex-row md:items-start"
              >
                <div className="w-full font-bold text-xl text-center mr-4 md:text-3xl md:w-1/3">
                  affordable
                </div>

                <div className="w-[320px] text-center md:text-left md:w-2/3 md:max-w-[400px]">
                  pricing and shipping. We don't want you to have to break the
                  bank to be able to enjoy the activities you love!
                </div>
              </m.div>
            </m.div>
          </div>
          <div className="mt-4 h-full w-full">
            <div className="bg-main h-full w-full bg-cover  flex justify-center items-center">
              <div>
                <form className="flex flex-col space-y-2 justify-center items-center">
                  <label htmlFor="signup font-raleway">
                    Sign Up for Exclusive Deals
                  </label>
                  <input
                    required
                    id="signup"
                    type="email"
                    value={email}
                    onChange={() => {
                      setEmail(email);
                    }}
                  />
                  <button className="w-[160px] h-[40px] bg-orange-400 rounded-lg font-bebas text-xl tracking-widest border-slate-300 border-2 hover:shadow-[inset_200px_0_0_0] hover:shadow-white duration-[400ms,800ms] transition-[color,box-shadow] hover:text-orange-500">
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
}
