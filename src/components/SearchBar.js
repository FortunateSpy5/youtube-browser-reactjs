import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.term}
              onChange={(event) =>
                this.setState({ term: event.target.value.trimStart() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
