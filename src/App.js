import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./pages/Product";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { CartProvider } from "./components/CartContext";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route exact path="/collection/:id" element={<ProductDisplay />} />
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
