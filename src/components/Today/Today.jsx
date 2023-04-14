import React, { useContext } from "react";
import moment from "moment";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { ToastContainer, toast } from "react-toastify";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import "react-toastify/dist/ReactToastify.css";
import { WeatherContext } from "../../context/WeatherContext";
import ToastView from "../../utils/Toastcontainer";

function Today() {
  const { fetchdata } = useContext(WeatherContext);
  return (
    <>
      {!fetchdata && <ToastView />}
      {fetchdata?.name ? (
        <div className="city">
          <h2 className="city-name">
            <span>{fetchdata.name}</span>
            <sup>{fetchdata.sys.country}</sup>
            <p>{moment().format("LT")}</p>
          </h2>
          <div className="city-temp">
            {Math.round(fetchdata.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${fetchdata.weather[0].icon}@2x.png`}
              alt={fetchdata.weather[0].description}
            />
            <p>{fetchdata.weather[0].description}</p>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
}

export default Today;
