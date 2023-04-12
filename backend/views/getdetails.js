const express = require("express");
const cors = require("cors");
const { verifytoken } = require("./jwt");
const Signup = require("../modals/signupschema");
const Creatorcoins = require("../modals/creatorschema");

const getrouter = express.Router();

getrouter.use(express.json());
getrouter.use(cors());

getrouter.post("/", async (req, res) => {
  //   console.log("This is the data that we received from the frontend");
  //   console.log(req.body);

  let { _jwt } = req.body;
  
  if (_jwt == undefined) {
    res.status(404).json({
      error: "The user needs to login to access the profile",
    });
  } else {
    // console.log("This is the jwt token", _jwt);
    let result = await verifytoken(_jwt);
    // console.log(result);
    let { email } = result;
    console.log(email);

    let data = await Signup.find({ email: email });
    console.log("This is the data that was found", data);
    console.log(data[0]);

    let fcoins = data[0].fcoins;
    let email2 = data[0].email;
    let creatorcoins = data[0].creatorcoins;
    console.log("These are the creatorcoins", data[0].creatorcoins);
    console.log(email2);
    console.log(fcoins, "These are the fcoins of the user");
    // console.log(
    //   creatorcoins,
    //   "These are the creator coins that the user holds"
    // );

    //Now that we have got the email the next step is to find the details related to that email

    res.json({
      status: "Ok",
      fcoins,
      email,
      creatorcoins
    });
  }
});

module.exports = getrouter;
