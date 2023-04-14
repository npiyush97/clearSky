import React, { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

export const ForecastContext = createContext();

export default function ForecastContextComponent({ children }) {
  const OpenWeatherKey = process.env.REACT_APP_Key;
  const [fetchdata, setFetchData] = useState([]);

  const handleForecast = async (query) => {
    const Url = "https://api.openweathermap.org/data/2.5/forecast";
    const { data } = await Axios.get(Url, {
      params: {
        q: query,
        units: "metric",
        APPID: OpenWeatherKey
      }
    }).catch((err) => {
      setFetchData("error");
      return err;
    });
    setFetchData(data);
  };
  const ForecastContextValue = useMemo(
    () => ({
      fetchdata,
      handleForecast
    }),
    [fetchdata, handleForecast]
  );

  return (
    <ForecastContext.Provider value={ForecastContextValue}>
      {children}
    </ForecastContext.Provider>
  );
}

ForecastContextComponent.propTypes = {
  children: PropTypes.node.isRequired
};
