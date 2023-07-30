import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <small>
          This project was coded by Pabalelo Tsebempe and is open-sourced on{" "}
          {""}
          <a
            href="https://github.com/PabaleloLucia/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </small>
      </div>
    </div>
  );
}
