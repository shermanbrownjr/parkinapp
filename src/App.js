import React, { useState } from "react";
import styles from "./App.module.css";
import SearchBar from "./SearchBar";
import Card from "./Card";

const App = () => {
  const [parkingLots, setParkingLots] = useState([]);

  const getParkingLots = (location) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:3001/search?location=${location}`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setParkingLots(data);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <h1 className={styles.Title}>Lowest Ranked Parking Lots</h1>
      <SearchBar placeholder="Enter Location" onEnter={getParkingLots} />
      <div className={styles.Container}>
        {parkingLots.map((item) => (
          <Card {...item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
