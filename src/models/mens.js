const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

const mensRanking = new mongoose.model("menRanking",mensSchema);

module.exports = mensRanking;
