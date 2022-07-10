const mongoose = require("mongoose");

const Publication = new mongoose.Schema({
  content: { type: String, required: true },
  creationDate: { type : Date, default: Date.now },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Publications", Publication);
