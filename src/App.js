import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductDisplay />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
