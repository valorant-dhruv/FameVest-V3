const express = require("express");
const main = require("./uniswapTrader");
const cors = require("cors");
const server = new express();
server.use(express.json());
server.use(cors());

server.post("/", async (req, res) => {
  console.log(req.body);
  let value = parseFloat(req.body.value);
  //   console.log(req.body.value);
  console.log(value);
  //   console.log(typeof req.body.value);
  //   console.log(typeof value);
  // let result=await main();
  let result = await main(value);
  console.log(result, "This is the result we got from the function");
  res.json({
    status: "ok",
    result,
  });
});

server.get("/", async (req, res) => {
  res.json("Hello world");
});

server.listen("3002", () => {
  console.log("The server for uniswap is listening");
});
