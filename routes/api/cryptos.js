const express = require("express");
const router = express.Router();
const axios = require('axios');
const CircularJSON = require('circular-json');

router.get('/', async (req, res) => {
  let tick = req.query['0'];
  try {
    const data = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tick}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    res.send(data.data[0])
  } catch (error) {
    res.status(404)
  }
});

router.get('/tickers', async (req,res) => {
  try {
    const data = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d");
    res.send(CircularJSON.stringify(data.data))
  } catch (error) {
    console.log(error)
  }  
});

router.get(`/tickers/:tickerId`, async (req,res) => {
  const tickerId = req.params.tickerId;
  const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${tickerId}?market_data=true&sparkline=true`);
  res.send(CircularJSON.stringify(data.data));
})

router.get(`/tickers/chart/:tickerId`, async (req, res) => {
  const tickerId = req.params.tickerId;

  const oneDayData = await axios.get(`https://api.coingecko.com/api/v3/coins/${tickerId}/market_chart?vs_currency=usd&days=1`);
  const sevenDayData = await axios.get(`https://api.coingecko.com/api/v3/coins/${tickerId}/market_chart?vs_currency=usd&days=7`);
  const thirtyDayData = await axios.get(`https://api.coingecko.com/api/v3/coins/${tickerId}/market_chart?vs_currency=usd&days=30`);

  const data = {
    oneDay: oneDayData.data.prices,
    sevenDay: sevenDayData.data.prices,
    thirtyDay: thirtyDayData.data.prices,
  };
  res.send(data);
});


module.exports = router;
