const express = require("express");
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/tickers', (req,res) => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
      )
      .then((data) => res.send(CircularJSON.stringify(data.data)))
      .catch((err) => console.log(err));
});

router.get(`/tickers/:tickerId`, (req,res) => {
    console.log(req)
    axios
      .get(
      `https://api.coingecko.com/api/v3/coins/${tickerId}?tickers=true&market_data=true`
     )
     .then(data => res.send(console.log(req)));
})

module.exports = router;
