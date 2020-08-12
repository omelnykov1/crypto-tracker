const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  tickers: [
    {
      tickerName: String
    }
  ],
  date: {
      type: Date,
      required: true
  }
});

module.exports = Table = mongoose.model(
  "Table",
  TableSchema
);
