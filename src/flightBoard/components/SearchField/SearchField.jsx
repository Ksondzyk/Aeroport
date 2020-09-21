import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { dateSelector } from "../../flights.selectors";

function SearchField({ date }) {
  const location = useLocation();
  const [flightID, setflightID] = useState(() => {
    const num = location.search.substr(13, 1) === "&" ? 5 : 6;
    console.log(location);
    return location.search.length > 28
      ? `${location.search.substr(8, num)}`
      : " ";
  });

  const iconSearch = {
    position: "absolute",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginLeft: "1rem",
  };

  return (
    <div className="search-field">
      <h2 className="search-field__title">Search flight</h2>
      <div className="search-field__form">
        <SearchIcon style={iconSearch} />
        <input
          type="text"
          className="search-field__input"
          placeholder="Search Airline"
          value={flightID}
          onChange={(event) => setflightID(event.target.value)}
        />

        <Link to={`${location.pathname}?search=${flightID}&date=${date}`}>
          <button className="search-field__btn" type="submit">
            SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    date: dateSelector(state),
  };
};

export default connect(mapStateToProps)(SearchField);
