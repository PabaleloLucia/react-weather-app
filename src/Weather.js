import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherInfo.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="type city name..."
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Current"
                className="btn btn-secondary "
              />
            </div>
          </div>
        </form>
        <h1>{weatherInfo.city}</h1>
        <ul>
          <li>
            <CurrentDate date={weatherInfo.date} />
          </li>
          <li className="text-capitalize">{weatherInfo.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherInfo.iconUrl} alt={weatherInfo.description} />
            <strong>{Math.round(weatherInfo.temperature)}</strong>
            <span className="units">
              <a href="./"> ℃</a> | <a href="./">℉</a>
            </span>
          </div>
          <div className="col-6 mt-3">
            <ul>
              <li>Humidity: {weatherInfo.humidity}%</li>
              <li>Wind: {Math.round(weatherInfo.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b44b3b21bbcdc2007ba9f404ao7et12a";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
