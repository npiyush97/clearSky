import React, { useContext, useEffect, useState } from "react";
import { ForecastContext } from "../../context/ForecastContext";
import { WeatherContext } from "../../context/WeatherContext";

export default function SearchBox() {
  const PreviousQuery = localStorage.getItem("city");

  const [query, setQuery] = useState(PreviousQuery || "");
  const { handleToday } = useContext(WeatherContext);
  const { handleForecast } = useContext(ForecastContext);

  function focusFn(e) {
    if (e.key === "/") {
      const input = document.querySelector(".search");
      input.focus();
    } else {
      document.body.removeEventListener("keyup", focusFn);
    }
  }
  document.body.addEventListener("keyup", (e) => focusFn(e));

  useEffect(() => {
    if (PreviousQuery) {
      handleToday(PreviousQuery);
      handleForecast(query);
      setQuery("");
    }
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.code === "Enter" || e.keyCode === 13) {
      handleToday(query);
      handleForecast(query);
      setQuery("");
    }
  }
  return (
    <input
      className="search"
      type="text"
      onKeyUp={(e) => handleChange(e)}
      placeholder="Press / to search"
    />
  );
}
