const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  location: String,
  date: Date,
  time: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("report", ReportSchema);