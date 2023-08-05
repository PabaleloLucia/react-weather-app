import React from "react";
import CurrentDate from "./CurrentDate";

export default function setWeatherInfo(props) {
  return (
    <div className="weatherDeatils">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <CurrentDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.info.iconUrl} alt={props.info.description} />
          <strong>{Math.round(props.info.temperature)}</strong>
          <span className="units">
            <a href="./"> ℃</a> | <a href="./">℉</a>
          </span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
