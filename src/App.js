import "./App.css";
import NavBar from "./Components/NavBar/Navigation";
import MainPage from "./Components/HomePage/MainPage";
import DisplayContent from "./Components/DisplayContent/DisplayContent";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Checkout from "./Components/Checkout/Checkout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="" element={<MainPage />}></Route>
          <Route path="/display" element={<DisplayContent />}></Route>
          <Route path="/order/:id" element={<PlaceOrder />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
