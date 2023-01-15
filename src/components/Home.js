import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-start items-center h-screen">
        <div className="absolute w-full h-full bg-main bg-cover bg-center bg-no-repeat -z-10 brightness-75 md:brightness-100"></div>
        <div className="w-full min-w-1/2 h-3/4 flex justify-center items-center max-h-[600px] md:w-1/2 md:items-start">
          <div className="w-3/4 flex flex-col rounded-xl gap-y-4 text-white text-center md:text-left">
            <div className=" font-bold text-3xl tracking-wide font-raleway">
              Unleash Your Potential <br></br>
              <span className="text-xl tracking-normal">
                with our Superior Performance Footwear
              </span>
            </div>
            <div className="text-2xl"></div>
            <div>
              <p className="text-base italic text-shadow-lg shadow-slate-600 md:shadow-white md:text-shadow-none">
                Our athletic shoes are designed with advanced cushioning systems
                and support features to provide maximum comfort and stability
                during intense physical activity. Whether you're running,
                jumping, or lifting, our shoes will help you perform at your
                best
              </p>
            </div>
            <div className="m-4 flex justify-center items-center">
              <button
                className="w-[140px] h-[48px] bg-orange-400 rounded-lg font-bebas text-xl tracking-wide border-slate-300 border-2"
                onClick={() => {
                  navigate("/products");
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
