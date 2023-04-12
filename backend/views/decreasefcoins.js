const express = require("express");
const cors = require("cors");
const decreaserouter = new express.Router();
const SignpSchema = require("../modals/signupschema");
const Signup = require("../modals/signupschema");

decreaserouter.use(cors());
decreaserouter.use(express.json());

decreaserouter.post("/", async (req, res) => {
  let { fcoins, email, creatorcoinsfinal } = req.body;
  //Before updating we first need to check whether the value that was passed as the fcoin is not more
  //   let result1 = await Signup.find({ email: email });
  //   console.log("This is the original value of the fcoins", result1[0].fcoins);

  if (fcoins < 0) {
    res.status(404).json({
      error: "You cannot buy more than the fcoins you have",
    });
  } else {
    console.log("This is the email for the user", email);
    console.log("This is the updated value of the fcoins", fcoins);

    let update = { fcoins: fcoins, creatorcoins: creatorcoinsfinal };
    let result = await Signup.findOneAndUpdate({ email: email }, update);

    console.log(result);

    console.log("It has been updated successfully");

    res.status(200).json({
      status: "Ok",
    });
  }
});

module.exports = decreaserouter;
