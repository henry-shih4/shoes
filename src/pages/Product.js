import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import ItemAddModal from "../components/ItemAddModal";
import { motion as m } from "framer-motion";
import { ShoesContext } from "../components/ShoesContext";

export default function ProductDisplay() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState("1");
  const [quantity, setQuantity] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const params = useParams();
  const [currentShoe, setCurrentShoe] = useState([]);
  const [, , addItemToCart, , , ,] = useContext(CartContext);
  const [shoes, url, loading] = useContext(ShoesContext);

  useEffect(() => {
    if (shoes) {
      let shoe = shoes.filter((shoe) => {
        return shoe._id.toString() === params.id;
      });
      setCurrentShoe(shoe[0]);
    }
  }, [params.id, shoes]);

  useEffect(() => {
    setQuantity(0);
  }, [activeImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAddModal(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showAddModal]);

  return (
    <>
      {loading ? <h1>loading ...</h1> : null}
      <m.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ scale: 1 }}
        className="absolute top-[96px] flex justify-center items-center min-h-[calc(100vh-96px)] w-full min-w-[320px] bg-white"
      >
        <div className="bg-white pb-10 w-[100%] flex flex-col justify-start items-center m-auto my-4 gap-y-4 md:flex-row md:w-[85%] lg:w-[75%] lg:gap-x-14">
          <div className=" flex flex-col justify-center items-center w-1/2 min-w-[320px] gap-y-6 lg:items-end">
            <div
              className="w-full"
              onClick={() => {
                navigate("/collection");
              }}
            >
              <img
                alt="left-arrow-icon"
                className="float-left  h-[28px] hover:scale-110 hover:cursor-pointer"
                src="/images/left-arrow.svg"
              />
            </div>
            <div className="h-max w-3/5 min-w-[300px] relative ">
              <img
                className="min-h-[300px] max-h-[400px] object-fit rounded-2xl"
                crossorigin="anonymous"
                src={
                  currentShoe.color1
                    ? url + currentShoe[`color${activeImage}`].image
                    : null
                }
                alt={"selected-shoe"}
              />
            </div>
            <div className="flex justify-between items-center gap-x-4 w-3/5 min-w-[300px]">
              <div
                className={
                  activeImage === "1"
                    ? "border-2 border-orange-400  rounded-xl hover:cursor-pointer"
                    : "rounded-xl hover:cursor-pointer"
                }
              >
                <img
                  className={
                    activeImage === "1"
                      ? "opacity-50 max-h-[80px] w-full rounded-xl"
                      : "max-h-[80px] w-full rounded-xl"
                  }
                  alt="shoe-color-1"
                  crossorigin="anonymous"
                  src={
                    currentShoe.color1 ? url + currentShoe.color1.image : null
                  }
                  onClick={() => {
                    setActiveImage("1");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "2"
                    ? "border-2 border-orange-400  rounded-xl hover:cursor-pointer"
                    : " rounded-xl hover:cursor-pointer"
                }
              >
                <img
                  className={
                    activeImage === "2"
                      ? "opacity-50 max-h-[80px] w-full rounded-xl"
                      : "max-h-[80px] w-full rounded-xl"
                  }
                  alt="shoe-color-2"
                  crossorigin="anonymous"
                  src={
                    currentShoe.color1 ? url + currentShoe.color2.image : null
                  }
                  onClick={() => {
                    setActiveImage("2");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "3"
                    ? "border-2 border-orange-400  rounded-xl hover:cursor-pointer"
                    : " rounded-xl hover:cursor-pointer"
                }
              >
                <img
                  className={
                    activeImage === "3"
                      ? "opacity-50 max-h-[80px] w-full rounded-xl"
                      : "max-h-[80px] w-full rounded-xl"
                  }
                  alt="shoe-color-3"
                  crossorigin="anonymous"
                  src={
                    currentShoe.color1 ? url + currentShoe.color3.image : null
                  }
                  onClick={() => {
                    setActiveImage("3");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "4"
                    ? "border-2 border-orange-400  rounded-xl hover:cursor-pointer"
                    : " rounded-xl hover:cursor-pointer"
                }
              >
                <img
                  className={
                    activeImage === "4"
                      ? "opacity-50 max-h-[80px] w-full rounded-xl"
                      : "max-h-[80px] w-full rounded-xl"
                  }
                  alt="shoe-color-4"
                  crossorigin="anonymous"
                  src={
                    currentShoe.color1 ? url + currentShoe.color4.image : null
                  }
                  onClick={() => {
                    setActiveImage("4");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center w-1/2 min-w-[320px] lg:justify-start">
            <div className="w-3/5 min-w-[300px] flex justify-center">
              <div className="space-y-3">
                <div className="text-orange-400 font-bold tracking-widest">
                  SNEAKER COMPANY
                </div>
                <div className="text-black text-4xl font-bold">
                  {currentShoe.name}
                </div>
                <div>
                  <p className="text-black">{currentShoe.description}</p>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-x-4 items-center">
                    <div className="text-2xl font-bold">
                      ${currentShoe.price}
                    </div>
                    <div className="text-sm text-orange-400 bg-orange-200 font-bold rounded-md p-1">
                      50%
                    </div>
                  </div>
                  <div className="text-slate-400 line-through">
                    ${currentShoe.oldPrice}
                  </div>
                </div>

                <div className="w-full flex h-[40px] space-x-2">
                  <div className="w-1/3 flex justify-between items-center bg-slate-100 rounded-xl">
                    <button
                      className="w-1/4 flex justify-center items-center h-full"
                      onClick={() => {
                        setQuantity(Math.max(quantity - 1, 0));
                      }}
                    >
                      <img alt="minus-icon" src="/images/icon-minus.svg" />
                    </button>
                    <div className="font-bold">{quantity}</div>
                    <button
                      className="w-1/4 flex justify-center items-center h-full"
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      <img alt="plus-icon" src="/images/icon-plus.svg" />
                    </button>
                  </div>
                  <div className="w-2/3 flex justify-center text-white ">
                    <button
                      className="flex items-center justify-center w-full font-bold space-x-2 bg-orange-400  rounded-xl hover:cursor-pointer hover:opacity-50 duration-500"
                      onClick={() => {
                        if (quantity > 0) {
                          addItemToCart({
                            name: currentShoe.name,
                            id: currentShoe._id,
                            variation: activeImage,
                            image:
                              url + currentShoe[`color${activeImage}`].image,
                            quantity: quantity,
                            price: currentShoe.price,
                          });
                          setShowAddModal(true);
                        }
                      }}
                    >
                      <img alt="cart-icon" src="/images/cart-white.svg" />
                      <div>Add to cart</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={showAddModal ? "fixed top-[50%] " : "hidden"}>
          <ItemAddModal name={currentShoe.name} variation={activeImage} />
        </div>
      </m.div>
    </>
  );
}
