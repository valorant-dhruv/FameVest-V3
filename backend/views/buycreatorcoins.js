const express = require("express");
const cors = require("cors");
const { buying } = require("./creatorcoins");
const CreatorSchema = require("../modals/creatorschema");

const creatorrouter = express.Router();

creatorrouter.use(cors());
creatorrouter.use(express.json());

creatorrouter.post("/", async (req, res) => {
  console.log(req.body);
  let { fcoins } = req.body;
  fcoins = parseFloat(fcoins);

  //Before calling this function we first need to find the values of the CFI AND CCCC from the database
  let result = await CreatorSchema.find({ name: "EMC" });
  // console.log("This is the result", result[0]);
  let _CFI = result[0].CFI;
  let _CCCC = result[0].CCCC;
  // console.log("This is the CFI", _CFI);
  // console.log(typeof _CFI);
  // console.log("This is the CCCC", _CCCC);

  let [CCV, CFI, CCCC] = await buying(fcoins, _CFI, _CCCC);
  console.log("The value of the creator coin in return", CCV);
  console.log("The total amount of f coins invested is:", CFI);
  console.log("The total amount of creator coins in circulation is:", CCCC);

  res.json({
    CCV,
    CFI,
    CCCC,
  });
});

module.exports = creatorrouter;
