import { createContext, useState } from "react";
import { shoeCollection } from "./shoeCollection";

const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

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

  function removeItemFromCart(index) {
    let filtered = cartItems.filter((item, i) => i !== index);
    setCartItems(filtered);
  }

  function removeOneFromCart() {}

  function getTotalCost() {
    let cost = cartItems.map((item) => item.price * item.quantity);
    let total = cost.reduce((sum, current) => sum + current, 0);
    setTotalCost(total);
  }

  return (
    <CartContext.Provider
      value={[
        totalCost,
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
