import { useEffect } from "react";
import { shoeCollection } from "./shoeCollection";

export default function Cart(props) {
  const { showCart, cart } = props;

  // useEffect(() => {
  //   console.log(cart);
  // });

  return (
    <>
      <div className={""}>
        <div>
          <div className="p-4">Cart</div>
          <div className="w-full border border-slate-200"></div>
          {cart
            ? cart.map((item) => {
                return (
                  <>
                    <div>{item[0].product_name}</div>
                    <div>
                      <img className="h-[80px]" src={item[0].product_img} />
                    </div>
                    <div>quantity {item[0].quantity}</div>
                    <div>price {item[0].price}</div>
                  </>
                );
              })
            : "Cart is empty."}
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
