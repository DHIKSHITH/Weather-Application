import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onsubmitHandler = (e) => {
    this.props.onsubmit(this.state.term);
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmitHandler}>
          <input
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
