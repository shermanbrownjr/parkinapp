import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import styles from "./searchbar.module.css";

const SearchBar = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.onEnter(e.target.value);
    }
  };

  return (
    <div className={styles.Search}>
      <span className={styles.SearchIcon}>
        <FaSearch />
      </span>
      <input
        className={styles.SearchInput}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder={props.placeholder}
      />
    </div>
  );
};

SearchBar.propTypes = {
  /**
   * Function to run when onKeyDown event id triggered
   */
  onEnter: PropTypes.func.isRequired,
  /**
   * Text placeholder for the search bar
   */
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
