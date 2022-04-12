import React, { createContext, useState } from "react";
import Axios from "axios";

export const WeatherContext = createContext();
export default function WeatherContextComponent(props) {
    const OpenWeatherKey = process.env.REACT_APP_Key;
    const [data, setData] = useState([]);

    const handleToday = async (query) => {
        const Url = "https://api.openweathermap.org/data/2.5/weather";
        const { data } = await Axios.get(Url, {
            params: {
                q: query,
                units: "metric",
                APPID: OpenWeatherKey,
            },
        }).catch((err) => {
            if (err.response) {
                alert("Enter valid city name");
                return null;
            }
        });
        setData(data);
    };

    return (
        <WeatherContext.Provider value={{ data, handleToday }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
