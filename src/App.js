import "./App.css";
import NavBar from "./Components/NavBar/Navigation";
import MainPage from "./Components/HomePage/MainPage";
import DisplayContent from "./Components/DisplayContent/DisplayContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MainPage /> */}
      <DisplayContent />
    </div>
  );
}

export default App;
