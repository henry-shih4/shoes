import "./App.css";
import Header from "./components/Header";
import { BrowserRouter} from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import AnimatedRoutes from "./components/AnimatedRoutes";
import React from "react";
import { ShoesProvider } from "./components/ShoesContext";
import { LoginProvider } from "./Context/LoginContext";

function App() {

  return (
    <LoginProvider>
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
    </LoginProvider>
  );
}

export default App;
