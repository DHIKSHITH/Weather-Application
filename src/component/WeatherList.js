import React from "react";

const WeatherList = (props) => {
  console.log(props.weather);
  const weatherList = (props) => {
    if (props.weather === undefined) {
      return <div>Pls enter the city</div>;
    } else {
      return (
        <div>
          <div className="weather">
            <h1 className="city-name">
              {props.weather.name} ({props.weather.sys.country})
            </h1>
            <div className="icon">
              <i className={`wi ${props.icon} display-1 icon`}></i>
              <span className="weather-name">
                {props.weather.weather[0].main}
              </span>
            </div>
          </div>
          <div className="temp">
            <span className="temperature">
              {Math.floor(props.weather.main.temp - 273.15)}&deg;
            </span>
            <span className="description">
              {props.weather.weather[0].description.toUpperCase()}
            </span>
          </div>
        </div>
      );
    }
  };
  return weatherList(props);
};

export default WeatherList;
