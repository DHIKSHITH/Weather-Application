import React from "react";
import "./style.css";

const SideNav = (props) => {
  if (props.weather === undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <div className="heading">
          <span className="weather-details-heading">Weather Details</span>
        </div>
        <ul className="list">
          <li className="list-1">
            <label>Min-temp</label>
            <span>{Math.floor(props.weather.main.temp_min - 273.15)}&deg;</span>
          </li>
          <li className="list-1">
            <label>Max-temp</label>
            <span>{Math.floor(props.weather.main.temp_max - 273.15)}&deg;</span>
          </li>
          <li className="list-1">
            <label>feels-temp</label>
            <span>
              {Math.floor(props.weather.main.feels_like - 273.15)}&deg;
            </span>
          </li>
          <li className="list-1">
            <label>Cloudy</label>
            <span>{props.weather.clouds.all}%</span>
          </li>
          <li className="list-1">
            <label>Humidity</label>
            <span>{props.weather.main.humidity}%</span>
          </li>
          <li className="list-1">
            <label>Wind</label>
            <span>{props.weather.wind.speed}km/h</span>
          </li>
        </ul>
      </div>
    );
  }
};
export default SideNav;
