const mongoose = require("mongoose");

const User = new mongoose.Schema({
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
  about: { type: String, required: true },
  avatar: { type: String, required: true },
  socialNetworks: { type: [], required: true },
  affiliations: {
    type: [
      {
        equipe: { type: String, required: true },
        fromDate: { type: String, required: true },
        toDate: { type: String, required: true },
        pays: { type: String },
        organisation: { type: String },
      },
    ],
    required: true,
  },
});

module.exports = mongoose.model("Users", User);
