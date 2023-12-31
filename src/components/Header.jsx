import { useEffect, useState } from "react";
import { Alert, FormControl } from "react-bootstrap";

export default function Header({ setWDetails }) {
  const delayConversion = 273.15;
  const [query, setQuery] = useState("Roma");
  const [error, setError] = useState(null);
  useEffect(() => {
    getCoord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getDirection(deg) {
    if ((deg >= 0 && deg <= 5) || deg >= 355) {
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
        setError(null);
      } else {
        // throw new Error("Errore nella fetch");
        setError("Errore nel recupero dei dati");
      }
    } catch (error) {
      setError("Errore nel recupero dei dati");
    }
  }

  async function getWeather(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1e980e3f1f0cc68d67286f66e4d8c151`
      );
      if (response.ok) {
        const data = await response.json();
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
          w_speed: Math.round(parseFloat(data.wind.speed) * 3.6), //conversione tra m/s e km/h
          name: data.name,
        });
      } else {
        setError("Errore nel recupero dei dati");
      }
    } catch (error) {
      setError("Errore nel recupero dei dati");
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
        <div className="d-flex justify-content-center">
          <FormControl
            className="input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        {error && (
          <Alert
            variant="danger"
            className="d-flex justify-content-center my-3 py-3 rounded-3"
          >
            {error}
          </Alert>
        )}
      </div>
    </>
  );
}
