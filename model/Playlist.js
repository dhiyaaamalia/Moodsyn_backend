const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paylistSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Paylist", paylistSchema);
