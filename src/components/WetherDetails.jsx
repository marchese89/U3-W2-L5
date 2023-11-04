export default function WetherDeails({ w_details }) {
  // temp_percep: data.main.feels_like,
  // humidity: data.main.humidity,
  // pressure: data.main.pressure,
  // temp: data.main.temp - delayConversion,
  // temp_min: data.main.temp_min - delayConversion,
  // temp_max: data.main.temp_max - delayConversion,
  // w_main: data.weather[0].main,
  // w_description: data.weather[0].description,
  // w_direction: getDirection(data.wind.deg),
  // w_speed: data.wind.speed,
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h2 className="city mt-4">{w_details.name}</h2>
        <div className="text-center">
          {w_details.w_main === "Snow" && (
            <i className="bi bi-snow main_image"></i>
          )}
          {w_details.w_main === "Clouds" && (
            <i className="bi bi-clouds main_image"></i>
          )}
          {w_details.w_main === "Mist" && (
            <i className="bi bi-cloud-fog main_image"></i>
          )}
          {w_details.w_main === "Clear" && (
            <i className="bi bi-brightness-high main_image"></i>
          )}
          {w_details.w_main === "Rain" && (
            <i className="bi bi-cloud-rain main_image"></i>
          )}
        </div>
        <div>{w_details.w_description}</div>
        {/* <div>Main:{w_details.w_main}</div> */}
        <div className="temp text-center">{w_details.temp}&deg;C</div>

        <div>Temperatura percepita: {w_details.temp_percep}&deg;C</div>
        <div>
          <i className="bi bi-thermometer-low"></i>Temp. Min.{" "}
          {w_details.temp_min}
          &deg;C | <i className="bi bi-thermometer-high"></i>Temp Max.{" "}
          {w_details.temp_max}
          &deg;C
        </div>
        <div>
          <i className="bi bi-droplet"></i>Umidità: {w_details.humidity}%
        </div>
        <div>Pressione Atmosferica: {w_details.pressure} hPa</div>
        <div>
          Vento: {w_details.w_speed} m/s (velocità) | {w_details.w_direction}{" "}
          (direzione)
        </div>
      </div>
    </>
  );
}
