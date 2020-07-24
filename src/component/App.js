import React from "react";
import weather from "../api/weather";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";
import Footer from "./Footer";
import SideNav from "./SideNav";
import "./style.css";
import "../assets/weather-icons-master/css/weather-icons.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { term: undefined, icon: undefined, date: "" };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  onSearchText = async (term) => {
    const response = await weather.get("/data/2.5/weather", {
      params: { q: term, appid: "c8fd227e570bca58d18aee7cf2454d88" },
    });

    this.setState({ term: response.data });
    this.get_WeatherIcon(this.weatherIcon, response.data.weather[0].id);
    let d = new Date(response.data.dt * 1000);
    const date = d.getDate();
    var tomonth = d.getMonth() + 1;
    var toyear = d.getFullYear();
    var hr = d.getHours();
    var m = "0" + d.getMinutes();
    var s = "0" + d.getSeconds();
    this.setState({ date });
    console.log(
      `${hr}-${m.substr(-2)}-${s.substr(-2)}- ${date} - ${tomonth} - ${toyear}`
    );
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <header className="navigation">
              <span>Weather</span>
              <span></span>
            </header>
            <SearchBar onsubmit={this.onSearchText} />
            <WeatherList weather={this.state.term} icon={this.state.icon} />
            <Footer date={this.state.date} />
          </div>
          <div className="side-nav">
            <SideNav weather={this.state.term} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
