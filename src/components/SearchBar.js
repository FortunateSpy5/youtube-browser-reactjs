import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSearchSubmit(term);
    setTerm("");
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search Video</label>
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={term}
            onChange={(event) => setTerm(event.target.value.trimStart())}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
