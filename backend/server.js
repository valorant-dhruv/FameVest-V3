const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.MONGODB_ATLAS;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("There is some error");
    console.log(err);
  });

const server = express();

// Here we are requring the app.js file because it handles all the routes
const app = require("./app");

//app is a middleware function which is included here
server.use(app);

server.listen(process.env.PORT, () => {
  console.log("The server is listening");
});
