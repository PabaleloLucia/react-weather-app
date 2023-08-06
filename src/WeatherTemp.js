import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");

  function switchToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function switchToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="temperature">
        <strong>{Math.round(props.celcius)}</strong>
        <span className="units">
          ℃ |
          <a href="./" onClick={switchToFahrenheit}>
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="temperature">
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="./" onClick={switchToCelcius}>
            ℃
          </a>
          | ℉
        </span>
      </span>
    );
  }
}
