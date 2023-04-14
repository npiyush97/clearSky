import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import ToastView from "../utils/Toastcontainer";

export const WeatherContext = createContext();
export default function WeatherContextComponent({ children }) {
  const OpenWeatherKey = process.env.REACT_APP_Key;
  const [fetchdata, setFetchData] = useState([]);
  const handleToday = async (query) => {
    const Url = "https://api.openweathermap.org/data/2.5/weather";
    const { data, status } = await Axios.get(Url, {
      params: {
        q: query,
        units: "metric",
        APPID: OpenWeatherKey
      }
    })
      .catch((err) => {
        setFetchData("error");
        return err;
      });
    if (status === 200) {
      setFetchData(data);
      localStorage.setItem("city", query);
    }
  };
  const WeatherContextValue = useMemo(
    () => ({ fetchdata, handleToday }),
    [fetchdata, handleToday]
  );
  return (
    <WeatherContext.Provider value={WeatherContextValue}>
      {fetchdata === "error" && <ToastView />}
      {children}
    </WeatherContext.Provider>
  );
}
WeatherContextComponent.propTypes = {
  children: PropTypes.node.isRequired
};
