const express = require("express");
const cors = require("cors");
const Signup = require("../modals/signupschema");

const fcoinrouter = express.Router();

fcoinrouter.use(cors());
fcoinrouter.use(express.json());

fcoinrouter.post("/", async (req, res) => {
  console.log("This is the data that was passed to us from the frontend");
  let { email, finalans } = req.body;

  //Now that we have got the email and the fcoins from the frontend the next step is to find the user based on the email
  let data = await Signup.find({ email: email });
  console.log("This is the data that was found", data);
  console.log(data[0]);

  let fcoinsbefore = data[0].fcoins;

  let fcoinsafter = fcoinsbefore + finalans;
  const update = { fcoins: fcoinsafter };

  let data2 = await Signup.findOneAndUpdate({ email: email }, update);
  console.log(data2, "This is the updated database");

  res.json({
    status: "Ok",
    fcoinsafter,
  });
});

module.exports = fcoinrouter;
