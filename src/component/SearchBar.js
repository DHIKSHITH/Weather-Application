import React from "react";
import "./style.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onsubmitHandler = (e) => {
    this.props.onsubmit(this.state.term);
    e.preventDefault();
  };
  render() {
    if (this.props.weather === undefined) {
      return (
        <div>
          <form onSubmit={this.onsubmitHandler}>
            <input
              className="text-box-error"
              value={this.state.term}
              type="text"
              placeholder="enter the city"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      );
    } else if (this.props.weather === "not found") {
      return (
        <div>
          <form onSubmit={this.onsubmitHandler}>
            <input
              className="text-box-error"
              value={this.state.term}
              type="text"
              placeholder="enter the city"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </form>
        </div>
      );
    }
    return (
      <div>
        <form onSubmit={this.onsubmitHandler}>
          <input
            className="text-box"
            value={this.state.term}
            type="text"
            placeholder="enter the city"
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}
export default SearchBar;
