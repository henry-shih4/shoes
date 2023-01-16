import { createContext, useState } from "react";
import { shoeCollection } from "./shoeCollection";

const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(product) {
    let exist = cartItems.find(
      (item) => item.variation === product.variation && item.id === product.id
    );
    if (exist) {
      console.log(exist.variation);
      setCartItems(
        cartItems.map((item) =>
          item.variation === product.variation && item.id === product.id
            ? {
                ...exist,
                quantity: exist.quantity + product.quantity,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, product]);
    }
  }

  function removeItemFromCart() {}

  function removeOneFromCart() {}

  function getTotalCost() {}

  return (
    <CartContext.Provider
      value={[
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeOneFromCart,
        getTotalCost,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
