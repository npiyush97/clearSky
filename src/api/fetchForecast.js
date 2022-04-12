import Axios from "axios";

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
        if(err.response){
            console.log('Enter valid city name')
            alert("Enter valid city name");
            return null
          }
    });
    return data;
};

export default FetchForecast;
