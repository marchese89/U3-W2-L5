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
          <i className="bi bi-snow main_image"></i>
        </div>
        <div className="temp text-center">{w_details.temp}&deg;C</div>
        <div>{w_details.w_description}</div>
        <div>Temperatura percepita: {w_details.temp_percep}</div>
        <div>Umidità: {w_details.humidity}%</div>
        <div></div>
      </div>
    </>
  );
}
