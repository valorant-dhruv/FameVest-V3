const express = require("express");
const app = new express();
const loginrouter = require("./views/login");
const { signup } = require("./views/signup");
const getdetails = require("./views/getdetails");
const cors = require("cors");
const creatorrouter = require("./views/buycreatorcoins");
const fcoinrouter = require("./views/addfcoins");
const decreaserouter = require("./views/decreasefcoins");
const updaterouter = require("./views/updatevalues");
const creatorrouter2 = require("./views/buycreatorcoins2");
const increaserouter = require("./views/increasefcoins");

app.use(cors());

app.use("/api/login", loginrouter);
app.use("/api/signup", signup);
app.use("/getdetails", getdetails);
app.use("/creatorcoins", creatorrouter);
app.use("/addfcoins", fcoinrouter);
app.use("/decreasefcoins", decreaserouter);
app.use("/updatevalues", updaterouter);
app.use("/creatorcoins2", creatorrouter2);
app.use("/increasefcoins", increaserouter);
module.exports = app;
