import React from "react";
import Axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";

const FetchWeatherApi = async (query) => {
  toast("Please enter valid city", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });

  const Url = "https://api.openweathermap.org/data/2.5/weather";
  const OpenWeatherKey = process.env.REACT_APP_Key;
  const { data } = await Axios.get(Url, {
    params: {
      q: query,
      units: "metric",
      APPID: OpenWeatherKey
    }
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />;
    // alert("Enter valid city name");
    console.log("here");
    return err;
  });
  return data;
};

export default FetchWeatherApi;
