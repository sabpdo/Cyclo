const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
  start: String,
  end: String,
});

module.exports = mongoose.model("route", RouteSchema);