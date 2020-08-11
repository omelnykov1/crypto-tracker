const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/tickers', (req,res) => {
    axios.get("https://api.coingecko.com/api/v3/coins/list")
        .then(data => res.json(data.data.slice(750,760)))
        .catch(err => console.log(err))
})

module.exports = router;
