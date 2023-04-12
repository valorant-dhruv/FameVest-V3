const express = require("express");
const loginRouter = new express();
const cors = require("cors");

const bcrypt = require("bcrypt");
const login = require("../modals/signupschema");

const { assigntoken } = require("./jwt");
loginRouter.use(cors());
loginRouter.use(express.json());

const isNotEmpty = (arr) => {
  if (arr[0]) {
    return true;
  }

  return false;
};

loginRouter.post("/", async (req, res) => {
  let { email, password } = await req.body;
  let _token;

  login.find({ email: req.body.email }, async (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: "Not ok",
        error: err,
      });
    }

    if (data.length == 0) {
      console.log("This ran");
      return res.json({
        status: "Not Ok",
        error: "The user is not found. Please Sign Up",
      });
    }

    //Now from the returned data we need to extract the Name nad the university of the student
    let name = data[0].Name;
    let university = data[0].Institute;

    //This means that the user data is now available with us

    if (isNotEmpty(data)) {
      //This means that the email id is found
      console.log("The emailid is found");
      let oldpassword = data[0].password;
      //Now as the email is found the next step is to compare the password that the user entered with the hashed password that is saved
      //in the database
      await bcrypt.compare(password, oldpassword, async (err, result) => {
        console.log("Is it even comparing the data");
        if (err) {
          console.log(err);
          res.json({
            status: "Not ok",
            error: err,
          });
        }
        if (result == false) {
          res.json({
            status: "Not Ok",
            error: "The email id or the password you have entered is wrong",
          });
        }

        if (result == true) {
          //This means that the user has logged in and hence
          console.log("Email just before the token is being assigned", email);
          _token = await assigntoken(email);

          await res.cookie("jwt", _token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
          });

          await res
            // .cookie("jwt", _token, {
            //   expires: new Date(Date.now() + 900000),
            //   httpOnly: true,
            // })
            .json({
              status: "Ok",
              token: _token,
              body: {
                email,
                password,
              },
              token: _token,
            });
        }
      });
    } else {
      // throw new Error("Please try signing up before logging in");
      console.log("Please try signing up before logging in");
      res.json({
        status: "Not ok",
        error: "Please try signing up before logging in",
      });
    }
  });
});

module.exports = loginRouter;
