import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";

import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherInfo({
      ready: true,

      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
    });
  }

  function searchCity() {
    let apiKey = "b44b3b21bbcdc2007ba9f404ao7et12a";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlesubmission(event) {
    event.preventDefault();
  }

  function handleChangedCity(event) {
    setCity(event.target.value);
    searchCity();
  }

  if (weatherInfo.ready) {
    return (
      <div className="weather">
        <form onSubmit={handlesubmission}>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="type city name..."
                autoFocus="on"
                onChange={handleChangedCity}
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
        <WeatherDetails info={weatherInfo} />
      </div>
    );
  } else {
    searchCity();
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
