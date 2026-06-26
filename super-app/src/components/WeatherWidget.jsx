// import "./WeatherWidget.css";

// function WeatherWidget(){

//     return(

//         <div className="widget weather-widget">

//             <h2>Weather</h2>

//             <h1>28°C</h1>

//             <p>Hyderabad</p>

//         </div>

//     )

// }

// export default WeatherWidget;
import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherApi";
import "./WeatherWidget.css";

function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  const today = new Date();

<h4>
{today.toLocaleDateString("en-US",{
weekday:"long",
month:"long",
day:"numeric"
})}
</h4>
  useEffect(() => {
    loadWeather();
  }, []);

  const loadWeather = async () => {
    const data = await getWeather();

    if (data) {
      setWeather(data);
    }
  };

  if (!weather) {
    return (
      <div className="widget weather-widget">
        Loading...
      </div>
    );
  }

  return (
    <div className="widget weather-widget">

      <h3>{weather.name}</h3>

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p>{weather.weather[0].main}</p>

      <div className="weather-info">
        <span>💧 {weather.main.humidity}%</span>

        <span>🌬 {weather.wind.speed} m/s</span>
      </div>

    </div>
  );
}

export default WeatherWidget;