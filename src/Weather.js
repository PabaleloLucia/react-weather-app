import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <input type="submit" value="Search" className="btn btn-secondary" />
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
      <h1>Gaborone</h1>
      <ul>
        <li>Wednesday 11:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
          <strong>16</strong>
          <span className="units">
            <a href="./"> ℃</a> | <a href="./">℉</a>
          </span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 2km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
