import Axios from "axios";

const FetchForecast = async (query) => {
  const OpenWeatherKey = process.env.REACT_APP_Key;
  const Url = "https://api.openweathermap.org/data/2.5/forecast";
  const { data } = await Axios.get(Url, {
    params: {
      q: query,
      units: "metric",
      APPID: OpenWeatherKey
    }
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    console.log("here");
    alert("Enter valid city name forecast");
    return err;
  });
  return data;
};

export default FetchForecast;
