const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const signUp = require("../modals/signupschema");
const signup = new express();
const handlingerror = require("./errors");
var hashedpassword;
signup.use(cors());
signup.use(express.json());
const { assigntoken } = require("./jwt");

const hashing = async (password, addingData) => {
  await bcrypt.genSalt(7, (err, result) => {
    if (err) {
      console.log(err);
    }

    bcrypt.hash(password, result, (err, data) => {
      hashedpassword = data;
      addingData();
    });
  });
};

const isNotEmpty = (arr) => {
  if (arr[0]) {
    return true;
  }

  return false;
};

signup.post("/", async (req, res) => {
  console.log("A signup request has been made");
  console.log(req.body, "This is the request body");
  console.log(req.body.email, "This is the requested email");
  console.log(req.body.password, "This is the requested password");
  console.log();
  async function addingData() {
    let _token;
    let _id;

    await signUp
      .create({
        name:req.body.name,
        email: req.body.email,
        password: hashedpassword,
      })
      .then(async () => {
        let data = await signUp.findOne({ email: req.body.email });
        console.log("This is the data inside the 1");
        console.log(data);
        _token = await assigntoken(req.body.name, req.body.email);
        console.log(_token);
        _id = data._id;
        console.log(`This is the id of the data${_id}`);
        await res.json({
          status: "Ok",
          token: _token,
          body: {
            _id,
            Name: req.body.Name,
            password: hashedpassword,
          },
        });
      })
      .catch((err) => {
        console.log("An error is detected");
        let str = handlingerror(err);
        console.log(str);
        res.status(404).json({
          error: err,
          status: "Not ok",
        });
      });

    console.log("The data is added");
  }

  //Before we hash the password and save the complete data in our database lets first check the validity of the data
  //The mongoose find is also an async function and thus it offloads the task while the rest of the tasks are executed
  new Promise((resolve, reject) => {
    signUp.find({ email: req.body.email }, (err, data) => {
      console.log(err);
      console.log(data);
      if (err) {
        console.log("Is this the error?");
        reject(err);
      }
      if (isNotEmpty(data)) {
        // reject("The email id is already registered please try logging in");
        res.status(404).send({
          status: "Not Ok",
          error: "The email id is already registered please try logging in",
        });
      } else {
        resolve(data);
      }
    });
  })
    .then(() => {
      console.log("This means that the hashing has been started");
      hashing(req.body.password, addingData);
    })
    .catch((err) => {
      console.log("Is there some problem in the promise");
      console.log(err);
      res.json({
        error: err,
      });
    });
});

module.exports = { signup, isNotEmpty };
