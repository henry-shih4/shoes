import { createContext, useState } from "react";
import { shoeCollection } from "./shoeCollection";

const CartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const [totalCost, setTotalCost] = useState(0);
  const [showCart, setShowCart] = useState(false);

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

  function removeOneFromCart(index) {
    // let itemToUpdate = cartItems.filter((item, i) => i == index);
    // console.log(itemToUpdate);
    cartItems[index].quantity -= 1;
    if (cartItems[index].quantity == 0) {
      removeItemFromCart(index);
    } else {
      setCartItems([...cartItems]);
    }
  }

  function getTotalCost() {
    let cost = cartItems.map((item) => item.price * item.quantity);
    let total = cost.reduce((sum, current) => sum + current, 0);
    setTotalCost(total);
  }

  function toggleShowCart(value) {
    setShowCart(value);
  }

  function clearCart() {
    setCartItems([]);
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
        showCart,
        toggleShowCart,
        clearCart,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
