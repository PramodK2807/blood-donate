import "./App.css";
import Compaign from "./Components/Compaign/Compaign";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/campaign" exact element={<Compaign />} />
    </Routes>
  );
}

export default App;
