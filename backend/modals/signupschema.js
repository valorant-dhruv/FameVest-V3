const mongoose = require("mongoose");

const SignpSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Every signup must have an email"],
    unique: [true, "The email id must be unique and this one is already taken"],
  },

  password: {
    type: String,
    required: [true, "Every signup must have a password with it"],
  },
  fcoins: {
    type: Number,
  },
  creatorcoins: {
    type: Number,
  },
});

const Signup = new mongoose.model("Singup", SignpSchema);

module.exports = Signup;
