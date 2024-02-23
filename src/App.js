import "./App.css";
import AboutUs from "./Components/About/AboutUs";
import Auth from "./Components/Auth";
import Compaign from "./Components/Compaign/Compaign";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import Request from "./Components/Request";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/campaign" exact element={<Compaign />} />
      <Route path="/login" exact element={<Auth />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/request" exact element={<Request />} />
      <Route path="/gallery" exact element={<Gallery />} />
    </Routes>
  );
}

export default App;
