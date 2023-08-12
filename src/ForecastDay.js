import React from "react";
import "./WeatherForecast.css";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.forecastInfo.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecastDay">
      <div className="forecast-day">{day()}</div>

      <img
        src={props.forecastInfo.condition.icon_url}
        alt={props.forecastInfo.condition.description}
        className="forecast-image"
      />

      <div className="forecast-units">
        <span className="forecastUnits-max">
          {Math.round(props.forecastInfo.temperature.maximum)}°
        </span>{" "}
        {""}
        {""}
        <span className="forecastUnits-min">
          {Math.round(props.forecastInfo.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
