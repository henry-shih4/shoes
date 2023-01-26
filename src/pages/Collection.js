import { useNavigate } from "react-router-dom";
import { shoeCollection } from "../components/shoeCollection";
import { motion as m } from "framer-motion";

export default function Collection() {
  const navigate = useNavigate();

  return (
    <>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="absolute top-[96px]  bg-white flex justify-center items-center h-max min-h-[calc(100vh-96px)] w-screen md:items-start "
      >
        <div className="h-full w-[90%] flex flex-col justify-center items-center font-raleway">
          <div className="w-[80%] flex justify-center items-center my-4 md:justify-start">
            <div className="flex flex-col min-w-[300px] max-w-[520px] gap-y-3 ">
              <div className="mt-4 text-3xl font-bold flex justify-start items-start w-full">
                <div className="w-full text-center md:text-left">
                  Our Collection
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-full items-center flex-wrap">
            {shoeCollection.map((shoe) => {
              return (
                <div
                  key={shoe.id}
                  className="flex flex-col justify-center items-center bg-white w-[240px] h-max min-w-[200px] min-h-[200px] m-2 p-2 font-raleway "
                >
                  <img
                    onClick={() => {
                      navigate(`/collection/${shoe.id}`);
                    }}
                    alt={`shoe-${shoe.id}`}
                    className="w-[200px] rounded-xl hover:cursor-pointer mb-2"
                    src={shoe.main_image1}
                  />
                  <h1 className="text-lg">{shoe.name}</h1>
                  <p className="font-bold">${shoe.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </m.div>
    </>
  );
}
