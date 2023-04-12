const mongoose = require("mongoose");

const CreatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  CFI: {
    type: Number,
    required: true,
  },

  CCCC: {
    type: Number,
    required: true,
  },
});

const Creatorcoins = new mongoose.model("Creatorcoins", CreatorSchema);

module.exports = Creatorcoins;
