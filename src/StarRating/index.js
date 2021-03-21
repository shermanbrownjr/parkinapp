import React from "react";
import PropTypes from "prop-types";
import styles from "./starrating.module.css";

const StarRating = (props) => {
  const newCount = Number(props.count);
  let position;

  switch (newCount) {
    case 1:
      position = 360;
      break;
    case 1.5:
      position = 340;
      break;
    case 2:
      position = 400;
      break;
    case 2.5:
      position = 380;
      break;
    case 3:
      position = 440;
      break;
    case 3.5:
      position = 420;
      break;
    case 4:
      position = 480;
      break;
    case 4.5:
      position = 460;
      break;
    case 5:
      position = 500;
      break;
    default:
      position = 320;
      break;
  }

  const starCount = {
    backgroundPosition: `0 -${position}px`,
  };

  return <div className={styles.Stars} style={starCount}></div>;
};

StarRating.propTypes = {
  /**
   * Count
   */
  count: PropTypes.string.isRequired,
};

export default StarRating;
