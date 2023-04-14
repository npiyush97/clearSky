import React from "react";
// import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import return5dayforecase from "../../utils/forecastData";

// eslint-disable-next-line react/prop-types
export default function Detail({ props }) {
  // eslint-disable-next-line no-console
  const list = props;
  const foreData = return5dayforecase(list).map((item) => (
    <div key={nanoid()} className="forecast">
      <div key={nanoid()} className="date">
        {item[0]}
      </div>
      <div key={nanoid()}>
        {item[4]}
        <sup> &deg;C</sup>
      </div>
      <div key={nanoid()}>
        <img className="forecast-img" src={item[3]} alt={item[2]} />
      </div>
      <div key={nanoid()} className="fore-desc">
        {item[1]}
      </div>
    </div>
  ));

  return list.length ? foreData : null;
}
// Detail.propTypes = {
//   props: PropTypes.object.isRequired
// };
