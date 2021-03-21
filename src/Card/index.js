import React from "react";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import StarRating from "../StarRating";

const Card = (props) => {
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.ColImg}>
        <img className={styles.Img} src={props.imageUrl} alt={props.name} />
        <div className={styles.Score}>Score: {props.score}</div>
      </div>
      <div className={styles.ColDetail}>
        <div className={styles.Name}>
          <a className={styles.Link} href={props.url}>
            {props.name}
          </a>
        </div>
        <StarRating count={props.rating} />
        <div className={styles.ReviewCount}>{props.reviewCount} Reviews</div>
        <div className={styles.Address}>{props.address}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * Url
   */
  url: PropTypes.string.isRequired,
  /**
   * Score
   */
  score: PropTypes.string.isRequired,
  /**
   * Review Count
   */
  reviewCount: PropTypes.string.isRequired,
  /**
   * Rating
   */
  rating: PropTypes.string.isRequired,
  /**
   * address
   */
  address: PropTypes.string.isRequired,
  /**
   * Image
   */
  imageUrl: PropTypes.string.isRequired,
  /**
   * Name
   */
  name: PropTypes.string.isRequired,
};

export default Card;
