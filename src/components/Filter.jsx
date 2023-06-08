import React from "react";
import styles from "./styles.module.css";

const Filter = ({ filter, setFilter }) => {
  const handleChange = (evt) => {
    const filterValue = evt.target.value;
    setFilter(filterValue);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filter">Filter</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;

