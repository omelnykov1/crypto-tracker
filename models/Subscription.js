const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    required: true,
  },
  date: {
      type: Date,
      required: true
  }
});

module.exports = Subscription = mongoose.model(
  "Subscription",
  SubscriptionSchema
);
