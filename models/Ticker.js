const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TickerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  table : {
    type: Schema.Types.ObjectId,
    ref: "tables"
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = Ticker = mongoose.model("Ticker", TickerSchema);
