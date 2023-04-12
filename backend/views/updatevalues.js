const express = require("express");
const cors = require("cors");
const { buying } = require("./creatorcoins");
const CreatorSchema = require("../modals/creatorschema");

const updaterouter = express.Router();

updaterouter.use(cors());
updaterouter.use(express.json());

updaterouter.post("/", async (req, res) => {
  let { cfi, cccc } = req.body;
  console.log("The values of cfi and cccc that we got from the frontend");
  let update = { CFI: cfi, CCCC: cccc };
  let result = await CreatorSchema.find({ name: "EMC" });
  // console.log("This is the result", result[0]);
  let _CFI = result[0].CFI;
  let _CCCC = result[0].CCCC;

  let updatedresult = await CreatorSchema.findOneAndUpdate(
    { name: "EMC" },
    update
  );

  console.log("The values of CFI and CCCC have been updated successfully");
});

module.exports = updaterouter;
