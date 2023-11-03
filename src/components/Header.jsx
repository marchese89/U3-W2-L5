import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";

export default function Header({ setWDetails }) {
  const delayConversion = 273.15;
  const [query, setQuery] = useState("");

  function getDirection(deg) {
    if (deg >= 0 && deg <= 5 && deg >= 355) {
      return "N";
    }
    if (deg > 5 && deg < 85) {
      return "NE";
    }
    if (deg >= 85 && deg <= 96) {
      return "E";
    }
    if (deg > 95 && deg < 175) {
      return "SE";
    }
    if (deg >= 175 && deg <= 185) {
      return "S";
    }
    if (deg > 185 && deg < 265) {
      return "SO";
    }
    if (deg >= 265 && deg <= 275) {
      return "O";
    }
    if (deg > 275 && deg < 355) {
      return "NO";
    }
  }

  async function getCoord() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1e980e3f1f0cc68d67286f66e4d8c151`
      );
      if (response.ok) {
        const data = await response.json();
        getWeather(data.coord.lat, data.coord.lon);
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  }

  async function getWeather(lat, lon) {
    //forecast <- previsioni per 5 giorni ogni 3 ore
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1e980e3f1f0cc68d67286f66e4d8c151`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setWDetails({
          temp_percep: parseInt(
            parseFloat(data.main.feels_like) - delayConversion
          ),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          temp: parseInt(parseFloat(data.main.temp) - delayConversion),
          temp_min: parseInt(parseFloat(data.main.temp_min) - delayConversion),
          temp_max: parseInt(parseFloat(data.main.temp_max) - delayConversion),
          w_main: data.weather[0].main,
          w_description: data.weather[0].description,
          w_direction: getDirection(data.wind.deg),
          w_speed: data.wind.speed,
          name: data.name,
        });
      } else {
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log("ERRORE", error);
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getCoord();
    }
  };

  return (
    <>
      <div className="container justify-content-center w-50">
        <div className="d-flex">
          <FormControl
            className="me-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button variant="info" onClick={getCoord}>
            Cerca
          </Button>
        </div>
      </div>
    </>
  );
}
