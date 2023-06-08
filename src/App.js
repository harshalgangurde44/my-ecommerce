import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/mainPart/Main";
import Cart from "./component/cart/cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
