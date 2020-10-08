import React from "react";

const WeatherList = (props) => {
  const weatherList = (props) => {
    if (props.weather === undefined) {
      return <div></div>;
    } else if (props.weather === "not found") {
      return <h1 className='error'>Please enter the valid City</h1>;
    } else {
      return (
        <div>
          <div className='weather'>
            <h1 className='city-name'>
              {props.weather.name} ({props.weather.sys.country})
            </h1>
            <div className='weather-icon'>
              <i className={`wi ${props.icon} display-1 icon `}></i>
              <span className='weather-name'>
                {props.weather.weather[0].main}
              </span>
            </div>
          </div>
          <div className='temp'>
            <span className='temperature'>
              {Math.floor(props.weather.main.temp - 273.15)}&deg;
            </span>
            <span className='description'>
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
