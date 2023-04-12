const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
var btc, usdt, usdc, dai, matic;
var mcap1, mcap2, mcap3, mcap4, mcap5;
var etherprice;
var fcoins;

const axios = require("axios");
async function returnfcoins(value) {
  // await axios
  //   .get(
  //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD",
  //     {
  //       headers: {
  //         "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data.data[0].quote.USD.market_cap);
  //     console.log("This is the market cap of bitcoin");
  //     mcap1 = response.data.data[0].quote.USD.market_cap;
  //   })
  //   .catch((error) => console.log(error));

  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
        },
      }
    )
    .then((response) => {
      console.log(response.data.data[1].quote.USD.price);
      console.log("This is the price of ethereum");
      etherprice = response.data.data[1].quote.USD.price;
    })
    .catch((error) => console.log(error));

  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
        },
      }
    )
    .then((response) => {
      console.log(response.data.data[2].quote.USD.market_cap);
      console.log("This is the market cap of usdt tether");
      mcap2 = response.data.data[2].quote.USD.market_cap;
    })
    .catch((error) => console.log(error));

  await axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=20&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
        },
      }
    )
    .then((response) => {
      console.log(response.data.data[3].quote.USD.market_cap);
      console.log("This is the market cap of usdc");
      mcap3 = response.data.data[3].quote.USD.market_cap;
    })
    .catch((error) => console.log(error));

  // await axios
  //   .get(
  //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD",
  //     {
  //       headers: {
  //         "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data.data[12].quote.USD.market_cap);
  //     console.log("This is the market cap of dai tokens");
  //     mcap4 = response.data.data[12].quote.USD.market_cap;
  //   })
  //   .catch((error) => console.log(error));

  // await axios
  //   .get(
  //     "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD",
  //     {
  //       headers: {
  //         "X-CMC_PRO_API_KEY": "4c12a01e-1b4c-485a-8780-65efcae7b98a",
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data.data[13].quote.USD.market_cap);
  //     console.log("This is the market cap of matic tokens");
  //     mcap5 = response.data.data[13].quote.USD.market_cap;
  //   })
  //   .catch((error) => console.log(error));

  return await Fcoins2(value);
}

// function Fcoins() {
//     var etham = 5 * etherprice;
//     console.log(etham);
//     console.log("This is the total amount of ethers in dollars invested");
//     btc = (33 / 100) * etham;
//     console.log(btc)
//     console.log("Bitcoin")
//     usdt = (25 / 100) * etham;
//     console.log(usdt)
//     console.log("USDT");
//     usdc = (17 / 100) * etham;
//     console.log(usdc)
//     console.log("USDC")
//     dai = (14 / 100) * etham;
//     console.log(dai)
//     console.log("Dai")
//     matic = (11 / 100) * etham;
//     console.log(matic)
//     console.log("Matic")

//     var temp1, temp2, temp3, temp4, temp5;
//     var sum = mcap1 + mcap2 + mcap3 + mcap4 + mcap5;
//     console.log(sum);
//     console.log("The sum of marketcaps", sum);
//     temp1 = mcap1 / sum;
//     console.log(temp1);
//     console.log("Temp1")
//     temp2 = mcap2 / sum;
//     console.log(temp2);
//     console.log("Temp2");
//     temp3 = mcap3 / sum;
//     console.log(temp3);
//     console.log("Temp3");
//     temp4 = mcap4 / sum;
//     console.log(temp4);
//     console.log("Temp4");
//     temp5 = mcap5 / sum;
//     console.log(temp5);
//     console.log("Temp5");

//     var fcoin = (temp1 * btc) + (temp2 * usdt) + (temp3 * usdc) + (temp4 * dai) + (temp5 * matic);
//     console.log("The amount of f coins generated is :", fcoin);

//     return fcoin;

// }

function Fcointoethers(value)
{
  
}

function Fcoins2(value) {
  var etham = value * etherprice;
  let btcin, usdtin, usdcin, daiin, maticin;
  console.log(etham);
  console.log("This is the total amount of ethers in dollars invested");
  // btcin = 33 / 100;
  usdtin = 50 / 100;
  usdcin = 50 / 100;
  // daiin = 14 / 100;
  // maticin = 11 / 100;
  // btc = btcin * etham;
  // console.log(btc);
  // console.log("Bitcoin in terms of dollars");
  // console.log("Bitcoin in terms of ethers");
  usdt = usdtin * etham;
  console.log(usdt);
  console.log("USDT");
  usdc = usdcin * etham;
  console.log(usdc);
  console.log("USDC");
  // dai = daiin * etham;
  // console.log(dai);
  // console.log("Dai");
  // matic = maticin * etham;
  // console.log(matic);
  // console.log("Matic");

  fcoins = (usdt * 50 + usdc * 50) / 50;
  console.log("The amount of f coins generated are:", fcoins);
  console.log("The price of each fcoin:", fcoins / etham);
  return fcoins;
}

const { ethers } = require("ethers");
const {
  abi: IUniswapV3PoolABI,
} = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");
const {
  abi: SwapRouterABI,
} = require("@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json");
const {
  abi: UniswapFactoryABI,
} = require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json");
const { getPoolImmutables, getPoolState } = require("./helpers");
const ERC20ABI = require("./abi.json");

require("dotenv").config();
const INFURA_URL_TESTNET = process.env.INFURA_URL_TESTNET;
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const WALLET_SECRET = process.env.WALLET_SECRET;

// const { getPoolImmutables, getPoolState } = require("./helpers");

const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET); // Ropsten
// const poolAddress = "0x4D7C363DED4B3b4e1F954494d2Bc3955e49699cC" // UNI/WETH

var pooladdress1;
var pooladdress2;
var pooladdress3;
var pooladdress4;
var pooladdress5;

//This is the pool address for USDC/ETH

//This is the pool address for MATIC/ETH

//This is the pool address for DAI/ETH

const swapRouterAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564";

const factoryaddress = "0x1F98431c8aD98523631AE4a59f267346ea31F984";

//The address0 is for wrapped ether
const name0 = "Wrapped Ether";
const symbol0 = "WETH";
const decimals0 = 18;
const address0 = "0xc778417e063141139fce010982780140aa0cd5ab";

//The address1 is for wrapped btc
const name1 = "Wrapped BTC";
const symbol1 = "WBTC";
const decimals1 = 8;
const address1 = "0x577D296678535e4903D59A4C929B718e1D575e0A";

//The address2 is for USDT
const name2 = "USDT Tether";
const symbol2 = "USDT";
const decimals2 = 6;
const address2 = "0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD";

//The address3 is for USDC
const name3 = "USD Coin";
const symbol3 = "USDC";
const decimals3 = 6;
const address3 = "0xeb8f08a975Ab53E34D8a0330E0D34de942C95926";

//The address4 is for Matic
const name4 = "Matic";
const symbol4 = "MATIC";
const decimals = 18;
const address4 = "0x83e556Da6514325eE615FF868cd0d324856fa0Cf";

//The address5 is for Dai
const name5 = "Dai tokens";
const symbol5 = "DAI";
const decimals5 = 18;
const address5 = "0x95b58a6Bff3D14B7DB2f5cb5F0Ad413DC2940658";

async function main(value) {
  const factorycontract = await new ethers.Contract(
    factoryaddress,
    UniswapFactoryABI,
    provider
  );

  //This is the pool address for WBTC/ETH
  pooladdress1 = await factorycontract.getPool(address0, address1, 3000);

  //This is the pool address for USDT/ETH
  pooladdress2 = await factorycontract.getPool(address0, address2, 3000);

  //This is the pool address for USDC/ETH
  pooladdress3 = await factorycontract.getPool(address0, address3, 3000);

  //This is the pool address for MATIC/ETH
  pooladdress4 = await factorycontract.getPool(address0, address4, 3000);

  //This is the pool address for DAI/ETH
  pooladdress5 = await factorycontract.getPool(address0, address5, 3000);

  console.log(
    pooladdress1,
    pooladdress2,
    pooladdress3,
    pooladdress4,
    pooladdress5
  );

  const poolContract1 = await new ethers.Contract(
    pooladdress1,
    IUniswapV3PoolABI,
    provider
  );

  const poolContract2 = await new ethers.Contract(
    pooladdress2,
    IUniswapV3PoolABI,
    provider
  );

  const poolContract3 = await new ethers.Contract(
    pooladdress3,
    IUniswapV3PoolABI,
    provider
  );

  // const poolContract4 = await new ethers.Contract(
  //   pooladdress4,
  //   IUniswapV3PoolABI,
  //   provider
  // );

  // const poolContract5 = await new ethers.Contract(
  //   pooladdress5,
  //   IUniswapV3PoolABI,
  //   provider
  // );

  console.log("The function is working fine here 1");

  const immutables1 = await getPoolImmutables(poolContract1);
  // const state1 = await getPoolState(poolContract1);

  console.log("The problem is before this");

  const immutables2 = await getPoolImmutables(poolContract2);
  // const state2 = await getPoolState(poolContract2);

  console.log("The problem is before this 2");

  const immutables3 = await getPoolImmutables(poolContract3);
  // const state3 = await getPoolState(poolContract3);

  console.log("The problem is before this 3");

  // const immutables4 = await getPoolImmutables(poolContract4);
  // // const state4 = await getPoolState(poolContract4);

  // console.log("The problem is before this 4");

  // const immutables5 = await getPoolImmutables(poolContract5);
  // // const state5 = await getPoolState(poolContract5);

  // console.log("The problem is before this 5");

  console.log("The function is working fine here 2");

  const wallet = await new ethers.Wallet(WALLET_SECRET);

  console.log("The function is working fine here 3");

  const connectedWallet = await wallet.connect(provider);

  console.log("The function is working fine here 4");

  const swapRouterContract = await new ethers.Contract(
    swapRouterAddress,
    SwapRouterABI,
    provider
  );

  console.log("The function is working fine here 5");

  const inputAmount = value;
  // .001 => 1 000 000 000 000 000
  const amountIn = await ethers.utils.parseUnits(
    inputAmount.toString(),
    decimals0
  );

  console.log("The function is working fine here 6");

  const approvalAmount = (amountIn * 100000).toString();
  // const decimals = 9;
  // const input = (amountIn * 100000).toString(); // Note: this is a string, e.g. user input
  // const input = inputAmount.toString();
  // const approvalAmount = await ethers.utils.parseUnits(input, "ethers");

  const tokenContract0 = await new ethers.Contract(
    address0,
    ERC20ABI,
    provider
  );

  console.log("The function is working fine here 7");

  const approvalResponse = await tokenContract0
    .connect(connectedWallet)
    .approve(swapRouterAddress, approvalAmount);

  console.log(approvalResponse);

  console.log("The function is working fine here 8");

  // const params1 = {
  //   tokenIn: immutables1.token1,
  //   tokenOut: immutables1.token0,
  //   fee: immutables1.fee,
  //   recipient: WALLET_ADDRESS,
  //   deadline: Math.floor(Date.now() / 1000) + 60 * 10,
  //   amountIn: amountIn,
  //   amountOutMinimum: 0,
  //   sqrtPriceLimitX96: 0,
  // };

  const params2 = {
    tokenIn: immutables2.token1,
    tokenOut: immutables2.token0,
    fee: immutables2.fee,
    recipient: WALLET_ADDRESS,
    deadline: Math.floor(Date.now() / 1000) + 60 * 10,
    amountIn: amountIn / 2,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  };

  const params3 = {
    tokenIn: immutables3.token1,
    tokenOut: immutables3.token0,
    fee: immutables3.fee,
    recipient: WALLET_ADDRESS,
    deadline: Math.floor(Date.now() / 1000) + 60 * 10,
    amountIn: amountIn / 2,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  };

  const params4 = {
    tokenIn: immutables2.token0,
    tokenOut: immutables2.token1,
    fee: immutables2.fee,
    recipient: WALLET_ADDRESS,
    deadline: Math.floor(Date.now() / 1000) + 60 * 10,
    amountIn: amountIn / 2,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  };

  const params5={
    tokenIn: immutables3.token0,
    tokenOut: immutables3.token1,
    fee: immutables3.fee,
    recipient: WALLET_ADDRESS,
    deadline: Math.floor(Date.now() / 1000) + 60 * 10,
    amountIn: amountIn / 2,
    amountOutMinimum: 0,
    sqrtPriceLimitX96: 0,
  }

  // const params4 = {
  //   tokenIn: immutables4.token1,
  //   tokenOut: immutables4.token0,
  //   fee: immutables4.fee,
  //   recipient: WALLET_ADDRESS,
  //   deadline: Math.floor(Date.now() / 1000) + 60 * 10,
  //   amountIn: amountIn,
  //   amountOutMinimum: 0,
  //   sqrtPriceLimitX96: 0,
  // };

  // const params5 = {
  //   tokenIn: immutables5.token1,
  //   tokenOut: immutables5.token0,
  //   fee: immutables5.fee,
  //   recipient: WALLET_ADDRESS,
  //   deadline: Math.floor(Date.now() / 1000) + 60 * 10,
  //   amountIn: amountIn,
  //   amountOutMinimum: 0,
  //   sqrtPriceLimitX96: 0,
  // };

  console.log("The function is working fine here 9");

  // const transaction1 = swapRouterContract
  //   .connect(connectedWallet)
  //   .exactInputSingle(params2, {
  //     gasLimit: ethers.utils.hexlify(1000000),
  //   })
  //   .then((transaction) => {
  //     console.log("The transaction is done for 1");
  //     // console.log(transaction);
  //   });

  const transaction2 = await swapRouterContract
    .connect(connectedWallet)
    .exactInputSingle(params2, {
      gasLimit: ethers.utils.hexlify(1000000),
    })
    .then((transaction) => {
      console.log("The transaction is done for 2");
      // console.log(transaction);
    });

  const transaction3 = await swapRouterContract
    .connect(connectedWallet)
    .exactInputSingle(params2, {
      gasLimit: ethers.utils.hexlify(1000000),
    })
    .then((transaction) => {
      console.log("The transaction is done for 3");
      // console.log(transaction);
    });

  return await returnfcoins(value);

  // const transaction4 = swapRouterContract
  //   .connect(connectedWallet)
  //   .exactInputSingle(params2, {
  //     gasLimit: ethers.utils.hexlify(1000000),
  //   })
  //   .then((transaction) => {
  //     console.log("The transaction is done for 4");
  //     // console.log(transaction);
  //   });

  // const transaction5 = swapRouterContract
  //   .connect(connectedWallet)
  //   .exactInputSingle(params2, {
  //     gasLimit: ethers.utils.hexlify(1000000),
  //   })
  //   .then((transaction) => {
  //     console.log("The transaction is done for 5");
  //     // console.log(transaction);
  //   });
}

// main(0.001);

module.exports = main;
