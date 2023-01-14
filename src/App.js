import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./components/ProductDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductDisplay />
    </div>
  );
}

export default App;
