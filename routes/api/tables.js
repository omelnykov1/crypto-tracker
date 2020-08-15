const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const Table = require("../../models/Table");
const passport = require("passport");
const table_validation = require("../../validation/table");

// router.get('/', (req,res) => {
//         Table.find()
//           .then((tables) => res.json(tables))
//           .catch((err) =>
//             res.status(404).json({ nolikesfound: "No subscriptions found" })
//           );
// });

router.get("/user/:userId", (req, res) => {
  Table.find({ user: req.params.userId })
    .then((tables) => res.json(tables))
    .catch((err) =>
      res.status(404).json({ notables: "No subscriptions found for this user" })
    );
});

router.post("/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = table_validation(req.body);

    if (!isValid) return res.status(400).json(errors);

    const newTable = new Table({
      user: req.body.user,
      tickers: req.body.tickers,
    });

    newTable
      .save()
      .then((table) => res.json(table))
      .catch((err) => console.log(err));
  }
);

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






module.exports = router;

