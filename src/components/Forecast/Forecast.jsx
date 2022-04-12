import React, { useContext } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import Detail from "./Details";

const Forecast = () => {
  const { data } = useContext(ForecastContext);
  const forecastData = data.list || 0;

  return (
    <div>
      {data.cnt > 0 ? (
        <div className="container">
          <Detail props={forecastData} />
        </div>
      ) : null}
    </div>
  );
};
export default Forecast;
