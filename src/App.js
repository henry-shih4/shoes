import "./App.css";
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from "react";
import { ShoesProvider } from "./components/ShoesContext";


function App() {

  return (
    <ShoesProvider>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Header />
            <AnimatedRoutes />
          </BrowserRouter>
        </CartProvider>
      </div>
    </ShoesProvider>
  );
}

export default App;
