const jwt = require("jsonwebtoken");
require("dotenv").config();

async function assigntoken(email) {
  console.log("This is the email");
  console.log(email);
  let obj = {
    email,
  };
  let data = await jwt.sign(obj, process.env.SECRET_KEY, { expiresIn: "90d" });
  return data;
}

async function verifytoken(token) {
  let _data;
  await jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    _data = data;
  });
  return _data;
}

module.exports = { assigntoken, verifytoken };
