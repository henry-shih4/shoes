
import { useNavigate } from "react-router-dom";
import { shoeCollection } from "./shoeCollection";

export default function Collection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-96px)] h-[calc(100vh-96px)] w-full">
        <div className="min-h-max w-[90%] flex justify-center items-center flex-wrap">
          {shoeCollection.map((shoe) => {
            return (
              <>
              
                <div
                  key={shoe.id}
                  className="flex flex-col justify-center items-center bg-white w-[240px] h-max min-w-[240px] min-h-[240px] m-2 p-2 font-raleway"
                >
                  <img
                    onClick={() => {
                      navigate(`/collection/${shoe.id}`);
                    }}
                    className="w-[200px]"
                    src={shoe.main_image1}
                  />
                  <h1>{shoe.name}</h1>
                  <p>${shoe.price}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
