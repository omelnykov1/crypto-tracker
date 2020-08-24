const express = require("express");
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/', (req, res) => {
  let tick = req.query['0']
  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tick}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(data => {
      res.json(data.data[0])
    })
    .catch(err => res.status(404))
});

router.get('/tickers', (req,res) => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
      )
      .then((data) => res.send(CircularJSON.stringify(data.data)))
      .catch((err) => console.log(err));
});

router.get(`/tickers/:tickerId`, (req,res) => {
    const tickerId = req.params.tickerId;
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${tickerId}?market_data=true&sparkline=true`
      )
      .then((data) => res.send(CircularJSON.stringify(data.data)));
})

router.get(`/tickers/chart/:tickerId`, (req, res) => {
  const tickerId = req.params.tickerId;
  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${tickerId}/market_chart?vs_currency=usd&days=7`
    )
    .then((data) => res.send(data.data.prices)
    );
});

module.exports = router;
