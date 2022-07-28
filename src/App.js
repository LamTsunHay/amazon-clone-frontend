import "./App.css";
import NavBar from "./Components/NavBar/Navigation";
import MainPage from "./Components/HomePage/MainPage";
import DisplayContent from "./Components/DisplayContent/DisplayContent";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      {/* <DisplayContent /> */}
      <PlaceOrder />
    </div>
  );
}

export default App;
