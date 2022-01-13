import Axios from "axios";

const FetchWeatherApi = async (query) => {
    const Url = "https://api.openweathermap.org/data/2.5/weather";
    const OpenWeatherKey = process.env.REACT_APP_Key;
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

export default FetchWeatherApi;
