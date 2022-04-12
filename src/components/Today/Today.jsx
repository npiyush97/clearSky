import React, { useContext} from "react";

import moment from "moment";
import { WeatherContext } from "../../context/WeatherContext";

const Today = () => {
  const { data } = useContext(WeatherContext);

  return (
    <>
      {data.name ? (
        <>
          <div className="city">
            <h2 className="city-name">
              <span>{data.name}</span>
              <sup>{data.sys.country}</sup>
              <p>{moment().format("LT")}</p>
            </h2>
            <div className="city-temp">
              {Math.round(data.main.temp)}
              <sup>&deg;C</sup>
            </div>
            <div className="info">
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
              />
              <p>{data.weather[0].description}</p>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Today;
