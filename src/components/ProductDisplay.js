import { useState } from "react";

export default function ProductDisplay() {
  const [activeImage, setActiveImage] = useState("1");
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);


  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen w-[75%] m-auto my-4 gap-y-4 md:flex-row md:gap-x-4">
        <div className="h-3/4  flex flex-col justify-center items-center w-1/2 min-w-[320px] gap-y-6">
          <div className="h-max w-3/5 min-w-[300px]">
            <img
              className="min-h-[300px] rounded-2xl"
              src={`/images/image-product-${activeImage}.jpg`}
            />
          </div>
          <div className="flex justify-between items-center gap-x-4 w-3/5 min-w-[300px]">
            <div
              className={
                activeImage == 1
                  ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                  : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
              }
            >
              <img
                className={
                  activeImage == 1
                    ? "opacity-50 h-full w-full rounded-xl"
                    : "h-full w-full rounded-xl"
                }
                src="./images/image-product-1-thumbnail.jpg"
                onClick={() => {
                  setActiveImage("1");
                }}
              />
            </div>
            <div
              className={
                activeImage == 2
                  ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                  : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
              }
            >
              <img
                className={
                  activeImage == 2
                    ? "opacity-50 h-full w-full rounded-xl"
                    : "h-full w-full rounded-xl"
                }
                src="./images/image-product-2-thumbnail.jpg"
                onClick={() => {
                  setActiveImage("2");
                }}
              />
            </div>
            <div
              className={
                activeImage == 3
                  ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                  : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
              }
            >
              <img
                className={
                  activeImage == 3
                    ? "opacity-50 h-full w-full rounded-xl"
                    : "h-full w-full rounded-xl"
                }
                src="./images/image-product-3-thumbnail.jpg"
                onClick={() => {
                  setActiveImage("3");
                }}
              />
            </div>
            <div
              className={
                activeImage == 4
                  ? "border-2 border-orange-400 min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl "
                  : "min-h-[64px] min-w-[64px] max-h-[80px] max-w-[80px] rounded-xl"
              }
            >
              <img
                className={
                  activeImage == 4
                    ? "opacity-50 h-full w-full rounded-xl"
                    : "h-full w-full rounded-xl"
                }
                src="./images/image-product-4-thumbnail.jpg"
                onClick={() => {
                  setActiveImage("4");
                }}
              />
            </div>
          </div>
        </div>
        <div className="h-3/4 flex justify-center items-center w-1/2 min-w-[320px]">
          <div className="w-3/5 min-w-[300px]">
            <div className="space-y-3">
              <div className="text-orange-400 font-bold tracking-widest">
                SNEAKER COMPANY
              </div>
              <div className="text-black text-3xl font-bold">
                Fall Limited Edition Sneakers
              </div>
              <div>
                <p className="text-black">
                  These low profile sneakers are your perfect casual wear
                  companion. Featuring a durable rubber outer sole, they'll
                  withstand everything the weather can offer.
                </p>
              </div>
              <div>
                {" "}
                <div className="flex gap-x-4 items-center">
                  <div className="text-2xl font-bold">$125.00</div>
                  <div className="text-sm text-orange-400 bg-orange-200 font-bold rounded-md p-1">
                    50%
                  </div>
                </div>
                <div className="text-slate-400 line-through">$250.00</div>
              </div>

              <div className="w-full flex h-[40px] space-x-2">
                <div className="w-1/3 flex justify-between items-center bg-slate-100 rounded-xl">
                  <button
                    className="w-1/4 flex justify-center items-center h-full"
                    onClick={() => {
                      setQuantity(Math.max(quantity - 1, 0));
                    }}
                  >
                    <img src="./images/icon-minus.svg" />
                  </button>
                  <div className="font-bold">{quantity}</div>
                  <button
                    className="w-1/4 flex justify-center items-center h-full"
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <img src="./images/icon-plus.svg" />
                  </button>
                </div>
                <div className="w-2/3 flex justify-center bg-orange-400 rounded-xl text-white">
                  <button className="flex items-center font-bold space-x-2">
                    <img src="./images/cart-white.svg" />
                    <div>Add to cart</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
