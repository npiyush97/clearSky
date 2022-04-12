import React from "react";
import { nanoid } from "nanoid";

export default function Detail(props) {
  const list = props.props;

  const forecastData = [];
  for (let i = 0; i < list.length; i += 8) {
    let temp = [];
    let dt = new Date(list[i + 5].dt_txt);
    temp.push(dt.getDate() + " / " + dt.getFullYear());
    temp.push(list[i].weather[0].main);
    temp.push(list[i + 3].weather[0].description);
    temp.push(
      `https://openweathermap.org/img/wn/${list[i].weather[0].icon}@2x.png`
    );
    temp.push(list[i].main.temp);
    forecastData.push(temp);
  }

  const foreData = forecastData.map((item, i) => {
    return (
      <div className="forecast">
        <div key={nanoid()} className="date">
          {item[0]}
        </div>
        <div key={nanoid()}>
          {item[4]} <sup>&deg;C</sup>
        </div>
        <div key={nanoid()}>
          <img className="forecast-img" src={item[3]} alt={item[2]} />
        </div>
        <div key={nanoid()} className="fore-desc">
          {item[1]}
        </div>
      </div>
    );
  });

  return <>{forecastData.length ? <>{foreData}</> : null}</>;
}
