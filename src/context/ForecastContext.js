import React, { createContext, useState } from "react";
import Axios from "axios";


export const ForecastContext = createContext();

export default function ForecastContextComponent(props) {
    const OpenWeatherKey = process.env.REACT_APP_Key;
    const [data, setData] = useState([]);

    const handleForecast = async (query) => {
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
                return null;
            }
        });
        setData(data);
    };

    return (
        <ForecastContext.Provider value={{ data, handleForecast }}>
            {props.children}
        </ForecastContext.Provider>
    );
}
