import Axios from "axios";
// import Weather_Key from "../config";

const FetchForecast = async (query) => {
    const OpenWeatherKey = process.env.REACT_APP_Key;

    const Url = "https://api.openweathermap.org/data/2.5/forecast";
    const { data } = await Axios.get(Url, {
        params: {
            q: query,
            units: "metric",
            APPID: OpenWeatherKey,
        },
    }).catch((err) => {
        if (err.response) {
            alert("Enter valid city name");
        }
    });
    return data;
};

export default FetchForecast;
