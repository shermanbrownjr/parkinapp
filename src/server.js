require("dotenv").config({
  path: require("path").join(__dirname, "./.env"),
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/search", (req, res, next) => {
  try {
    const location = req.query.location;
    const defaultImage = "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_styleguide/4f30aa60678e/assets/img/default_avatars/business_large_square.png";

    const config = {
      method: "get",
      url:
        `https://api.yelp.com/v3/businesses/search?term=parking&location=${location}&sort_by=review_count`,
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      },
    };

    axios(config)
      .then((response) => {
        
        const businesses = response.data.businesses.map((item) => {
          return {
            location,
            name: item.name,
            imageUrl: item.image_url ? item.image_url : defaultImage,
            url: item.url,
            reviewCount: item.review_count,
            rating: item.rating,
            address: item.location.display_address.join(" "),
            score: ((item.review_count * item.rating) / (item.review_count + 1)).toFixed(1),
          };
        });

         return res.status(200).json(businesses.sort((a,b) => {return a.score - b.score}));
      })
      .catch((err) => {
        next(err);
      });

  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
