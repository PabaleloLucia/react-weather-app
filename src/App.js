import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <small>
          This project was coded by <a
            href="mailto:pabalelotsebempe@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
       Pabalelo Tsebempe
          </a> and is open-sourced on{" "}
          {""}
          <a
            href="https://github.com/PabaleloLucia/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a> and hosted on  <a
            href="https://github.com/PabaleloLucia/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
