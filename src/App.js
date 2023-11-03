import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import WetherDeails from "./components/WetherDetails";
import { useState } from "react";

function App() {
  const [wDetails, setWDetails] = useState({
    temp_percep: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    w_main: "",
    w_description: "",
    w_direction: "",
    w_speed: 0,
    name: "",
  });
  return (
    <div className="container">
      <div className="row justify-content-center d-flex">
        <div className="col-6"></div>
      </div>
      <h1 className="text-center mt-4">Meteo</h1>
      <Header setWDetails={setWDetails} />
      <WetherDeails w_details={wDetails} />
    </div>
  );
}

export default App;
