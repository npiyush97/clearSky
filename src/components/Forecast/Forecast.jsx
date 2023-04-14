import React, { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Detail from "./Details";

function Forecast() {
  const { fetchdata } = useContext(ForecastContext);
  const forecastData = fetchdata?.list || 0;

  return fetchdata?.cnt > 0 ? (
    <div className="container">
      <Detail props={forecastData} />
    </div>
  ) : (
    <div>No data to display</div>
  );
}
export default Forecast;
