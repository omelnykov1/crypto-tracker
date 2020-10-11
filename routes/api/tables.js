const express = require("express");
const router = express.Router();
const axios = require('axios');
const keys = require("../../config/keys");
const Table = require("../../models/Table");
const passport = require("passport");
const table_validation = require("../../validation/table");

router.get('/', passport.authenticate("jwt", { session: false }), (req,res) => {
  axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${req.body.tickerId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(data => res.json(data.data))
    .catch(err => res.status(404))
});

router.get("/user/:userId", (req, res) => {
  Table.find({ user: req.params.userId })
    .then((table) => {
      if (table.length) {
        return table[0]
      } else {
        res.json(table)
      }})
      .then(table => {
        const tickersStr = table.tickers.map(ticker => ticker.id).join('%2C');
        const user = table.user;
        const _id = table._id;
        
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${tickersStr}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
          .then(data => res.json({ user, _id, tickers: table.tickers.length ? data.data : [] }))
      })
    .catch((err) =>
      res.status(404).json({ notables: "No subscriptions found for this user" })
    );
});


router.post("/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  try {
    const { errors, isValid } = table_validation(req.body);

    if (!isValid) return res.status(400).json(errors);

    const newTable = new Table({
      user: req.body.user,
      tickers: req.body.tickers,
    });
    const table = await newTable.save();
    res.json(table);
  } catch (error) {
    throw (error);
  }
});

router.patch("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  const table = Table.findOneAndUpdate(
    { _id: req.body._id }, { tickers: req.body.tickers }, { new: true }, (err, table) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.json(table);
      }
    }
  );
});

router.delete('/:tableId', passport.authenticate("jwt", { session: false }), (req, res) => {
  Table.findById(req.params.tableId, (err, table) => {
    if (!table) {
      return res.status(400).json("Table not found");
    } else {
      Table.remove({ _id: req.params.tableId }, function (err, table) {
          if (err) {
            return res.status(400).json(err);
          } else {
            res.send("Table has been deleted");
          }
        }
      );
    }
  });
})






module.exports = router;

