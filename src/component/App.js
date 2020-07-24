import React from "react";
import weather from "../api/weather";
import SearchBar from "./SearchBar";
import WeatherList from "./WeatherList";

class App extends React.Component {
  state = { term: undefined };
  onSearchText = async (term) => {
    const response = await weather.get("/data/2.5/weather", {
      params: { q: term, appid: "c8fd227e570bca58d18aee7cf2454d88" },
    });

    this.setState({ term: response.data });
  };

  render() {
    return (
      <div>
        <SearchBar onsubmit={this.onSearchText} />
        <WeatherList weather={this.state.term} />
      </div>
    );
  }
}
export default App;
