export default function WetherDeails({ w_details }) {
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
          {(w_details.w_main === "Mist" || w_details.w_main === "Fog") && (
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
        <div className="temp text-center">{w_details.temp}&deg;C</div>
        <div className="d-flex flex-column align-items-center">
          <div className="detail">
            Temperatura percepita: {w_details.temp_percep}&deg;C
          </div>
          <div className="detail">
            <i className="bi bi-thermometer-low"></i>Temp. Min.{" "}
            {w_details.temp_min}
            &deg;C | <i className="bi bi-thermometer-high"></i>Temp Max.{" "}
            {w_details.temp_max}
            &deg;C
          </div>
          <div className="detail">
            <i className="bi bi-droplet"></i>Umidità: {w_details.humidity}%
          </div>
          <div className="detail">
            Pressione Atmosferica: {w_details.pressure} hPa
          </div>
          <div className="detail">
            Vento: {w_details.w_speed} m/s (velocità) | {w_details.w_direction}{" "}
            (direzione)
          </div>
        </div>
      </div>
    </>
  );
}
