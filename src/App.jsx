import React from "react";
// import FetchBoth from "./api/fetchBoth";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import SearchBox from "./components/SearchBox/SearchBox";
import Today from "./components/Today/Today";
import ForecastContextComponent from "./context/ForecastContext";
import WeatherContextComponent from "./context/WeatherContext";

function App() {
  return (
    <WeatherContextComponent>
      <ForecastContextComponent>
        <div className="main-container">
          <h1>Weather App</h1>
          <SearchBox />
          <Today />
          <Forecast />
        </div>
      </ForecastContextComponent>
    </WeatherContextComponent>
  );
}

export default App;
