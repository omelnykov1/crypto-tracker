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
    console.log(req)
    const { errors, isValid } = table_validation(req.body);

    if (!isValid) return res.status(400).json(errors);

    const newTable = new Table({
      user: req.body.user,
      tickers: req.body.tickers,
    });

    console.log(newTable);

    newTable
      .save()
      .then((table) => res.json(table))
      .catch((err) => console.log(err));
  }
);

router.patch("/", (req, res) => {
  const notif = Table.findOneAndUpdate(
    { _id: req.params.id },
    function (err, table) {
      if (err) {
        res.status(404).json(err);
      } else {
        res.send(table);
      }
    }
  );
});






module.exports = router;

