const express = require("express");
const cors = require("cors");
const { selling } = require("./creatorcoins");
const CreatorSchema = require("../modals/creatorschema");

const creatorrouter2 = express.Router();

creatorrouter2.use(cors());
creatorrouter2.use(express.json());

creatorrouter2.post("/", async (req, res) => {
  console.log(req.body);
  let { creatorcoins } = req.body;
  creatorcoins = parseFloat(creatorcoins);

  //Before calling this function we first need to find the values of the CFI AND CCCC from the database
  let result = await CreatorSchema.find({ name: "EMC" });
  // console.log("This is the result", result[0]);
  let _CFI = result[0].CFI;
  let _CCCC = result[0].CCCC;
  console.log("This is the cfi in the database", _CFI);
  console.log("This is the cccc in the database", _CCCC);

  // console.log("This is the CFI", _CFI);
  // console.log(typeof _CFI);
  // console.log("This is the CCCC", _CCCC);

  let [UG, CFI, CCCC] = await selling(creatorcoins, _CFI, _CCCC);
  console.log("The value of the creator coin in return", UG);
  console.log("The total amount of f coins invested is:", CFI);
  console.log("The total amount of creator coins in circulation is:", CCCC);

  res.json({
    UG,
    CFI,
    CCCC,
  });
});

module.exports = creatorrouter2;
