import "./App.css";
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from "react";


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <AnimatedRoutes />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
