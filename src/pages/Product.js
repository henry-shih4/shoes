import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { shoeCollection } from "../components/shoeCollection";
import { CartContext } from "../components/CartContext";
import ItemAddModal from "../components/ItemAddModal";

export default function ProductDisplay() {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState("1");
  const [quantity, setQuantity] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const params = useParams();
  const [currentShoe, setCurrentShoe] = useState([]);
  const [
    totalCost,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    removeOneFromCart,
    getTotalCost,
  ] = useContext(CartContext);

  useEffect(() => {
    let shoe = shoeCollection.filter((shoe) => {
      return shoe.id == params.id;
    });
    setCurrentShoe(shoe[0]);
  }, [params.id]);

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
      <div className="flex justify-center items-center min-h-[calc(100vh-96px)] w-full ">
        <div className="w-[100%] flex flex-col justify-start items-center m-auto my-4 gap-y-4 md:flex-row md:w-[85%] lg:w-[75%] lg:lg:gap-x-14">
          <div className=" flex flex-col justify-center items-center w-1/2 min-w-[320px] gap-y-6 lg:items-end">
            <div
              className="w-full"
              onClick={() => {
                navigate("/collection");
              }}
            >
              <img
                alt="left-arrow-icon"
                className="float-left  h-[28px] "
                src="/images/left-arrow.svg"
              />
            </div>
            <div className="h-max w-3/5 min-w-[300px] relative ">
              <img
                className="min-h-[300px] rounded-2xl"
                src={currentShoe[`main_image${activeImage}`]}
                alt={"selected-shoe"}
              />
            </div>
            <div className="flex justify-between items-center gap-x-4 w-3/5 min-w-[300px]">
              <div
                className={
                  activeImage === "1"
                    ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                    : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
                }
              >
                <img
                  className={
                    activeImage === "1"
                      ? "opacity-50 h-full w-full rounded-xl"
                      : "h-full w-full rounded-xl"
                  }
                  alt="shoe-color-1"
                  src={currentShoe.main_image1}
                  onClick={() => {
                    setActiveImage("1");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "2"
                    ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                    : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
                }
              >
                <img
                  className={
                    activeImage === "2"
                      ? "opacity-50 h-full w-full rounded-xl"
                      : "h-full w-full rounded-xl"
                  }
                  alt="shoe-color-2"
                  src={currentShoe.main_image2}
                  onClick={() => {
                    setActiveImage("2");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "3"
                    ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                    : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
                }
              >
                <img
                  className={
                    activeImage === "3"
                      ? "opacity-50 h-full w-full rounded-xl"
                      : "h-full w-full rounded-xl"
                  }
                  alt="shoe-color-3"
                  src={currentShoe.main_image3}
                  onClick={() => {
                    setActiveImage("3");
                  }}
                />
              </div>
              <div
                className={
                  activeImage === "4"
                    ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                    : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
                }
              >
                <img
                  className={
                    activeImage === "4"
                      ? "opacity-50 h-full w-full rounded-xl"
                      : "h-full w-full rounded-xl"
                  }
                  alt="shoe-color-4"
                  src={currentShoe.main_image4}
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
                    ${currentShoe.old_price}
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
                            id: currentShoe.id,
                            variation: activeImage,
                            image: currentShoe[`main_image${activeImage}`],
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
      </div>
    </>
  );
}
