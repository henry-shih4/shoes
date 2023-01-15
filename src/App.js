import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDisplay from "./components/Product";
import Home from "./components/Home";
import Collection from "./components/Collection";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route exact path="/collection/:id" element={<ProductDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
