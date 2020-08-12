const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Table = require("./Table").schema;
const Ticker = require("./Ticker").schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // birthday: {
  //   type: Date,
  //   required: true,
  // },
  date: {
    type: Date,
    default: Date.now,
  },
  table: [Table],
  tickers: [Ticker]
});

module.exports = User = mongoose.model("users", UserSchema);
