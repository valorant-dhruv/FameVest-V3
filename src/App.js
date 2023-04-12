import "./App.css";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import elonbanner from "./images/elonbanner.png";
import elonmusk from "./images/elonmusk.png";
import graph from "./images/graph.png";
import arrow from "./images/aestheticarrow.png";
import linegraph from "./images/linegraph.png";
import sevenday from "./images/sevenday.png";
import identicon from "./images/identicon.png";
import Login_signup from "./components/LoginSignup/loginsignup";
import Transferethers from "./contracts/Transferethers.json";
import Web3 from "web3";
import Context from "./contexts/usercontext";
// import { post } from "../backend/views/getdetails";
// import main from "../uniswap_f5-main/uniswapTrader";

const Home = () => {
  return (
    <>
      <div class="background">
        <Navbar />
        <div class="both">
          <Sidebar />

          <div className="mainhome">
            <h1>
              Buy your favourite creator’s coin and enjoy the ride with them!
            </h1>

            <div class="columnhome">
              <div class="row">
                <div class="topicshome">
                  <div className="emptyhome"></div>

                  <div className="name">
                    <h1>Name</h1>
                  </div>
                  <div class="daymovehome">
                    <h1>24h change</h1>
                  </div>

                  <div className="marketcap">
                    <h1>Market cap</h1>
                  </div>

                  <div className="sevenday">
                    <h1>7d graph</h1>
                  </div>
                  <div className="pricetopic">
                    <h1>Price</h1>
                  </div>
                  <div className="sell"></div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardhome">
                  <div className="nothinghome"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="daymovement">
                    <h1>+1.39</h1>
                  </div>

                  <div className="mchome">
                    <h1>$549,000</h1>
                  </div>

                  <div className="sevendayhome">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="pricehome">
                    <h1>$523.75</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Docs = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <h1>Docs</h1>
    </>
  );
};

const Features = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <h1>Features</h1>
    </>
  );
};

const Trends = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <h1>Trends</h1>
    </>
  );
};

const Profile = () => {
  //Here also we need to check for the cookies to see whether the user can access this profile section or not
  const [err, seterr] = useState(false);
  let [fcoinvalue, Setfcoinvalue] = useState("");
  let [cfi, setcfi] = useState();
  let [creatorcoins, setcreatorcoins] = useState();
  let [cccc, setcccc] = useState();
  const [fcoins, setfcoins] = useState();
  const [fcoins2, setfcoins2] = useState();
  const [email, setemail] = useState();
  let [creatorcoinsreceived, setcreatorcoinsreceived] = useState();
  let [creatorcoins2, setcreatorcoins2] = useState();
  useLayoutEffect(() => {
    //check local token or something
    async function getid() {
      let finaldata = {};
      let _data = await document.cookie.split(";");
      await _data.forEach((element, i) => {
        let temp = element.split("=");
        let key = temp[0];
        let value = temp[1];
        let tempobj = {
          [`${key}`]: value,
        };
        Object.assign(finaldata, tempobj);
      });
      let _jwt = finaldata.jwt;
      // jwtglobal = finaldata.jwt;
      // jwtfinal.current = finaldata.jwt;
      // console.log("This is the jwt token", _jwt);
      // setjwt(_jwt);
      // jwt.current=_jwt;
      console.log("This is the jwt", _jwt);

      let data2 = await fetch("http://localhost:3001/getdetails", {
        method: "POST",
        body: JSON.stringify({
          _jwt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      console.log("This is the response for the data from backend", data2);
      let { fcoins, email, creatorcoins } = data2;
      setfcoins(fcoins);
      setemail(email);
      setcreatorcoinsreceived(creatorcoins);

      if (data2.error) {
        seterr(true);
      }

      // console.log("This is the data we get after verifying the jwt", data2);
      // id.current = data2.data;
      // idglobal = data2.data;
      // userdata.current = data2.data2[0];

      //Ok so we now have the jwt for the profile
      //The next step is to get the data from the jwt
      //There are actually two approaches
      //When accessing myprofile we need to id for us which is available from the jwt
      //When accessing other person's profile we need the id for that other person which cannot be obtained from jwt
      //Since here we are accessing myprofile we are going to take the id via jwt
    }

    getid();
  }, []);

  if (err) {
    return <div>The user needs to login to access the profile</div>;
  }

  async function changing(value) {
    // console.log("Yes we are changing the value of the fcoin");
    await Setfcoinvalue(value);
    let result = await fetch("http://localhost:3001/creatorcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: value,
      }),
    });

    let ans = await result.json();
    // console.log("These are the values that we got from the backend", ans);
    let { CCV, CFI, CCCC } = ans;
    console.log(
      ans,
      "This is the data that is received from the backend after the value is set"
    );
    // console.log(CCV);
    // console.log(typeof CCV);
    // console.log(CFI);
    // console.log(typeof CFI);
    // console.log(CCCC);
    // console.log(typeof CCCC);
    setcreatorcoins(CCV);
    setcfi(CFI);
    setcccc(CCCC);
  }

  async function changing2(value) {
    // console.log("Yes we are changing the value of the fcoin");
    await setcreatorcoins2(value);
    let result = await fetch("http://localhost:3001/creatorcoins2", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        creatorcoins: value,
      }),
    });

    let ans = await result.json();
    // console.log("These are the values that we got from the backend", ans);
    let { UG, CFI, CCCC } = ans;
    console.log(
      ans,
      "This is the data that is received from the backend after the value is set"
    );
    // console.log(CCV);
    // console.log(typeof CCV);
    // console.log(CFI);
    // console.log(typeof CFI);
    // console.log(CCCC);
    // console.log(typeof CCCC);
    // setcreatorcoins(CCV);
    setfcoins2(UG);
    setcfi(CFI);
    setcccc(CCCC);
  }

  // const buycreatorcoins2 = async () => {};
  const buycreatorcoins2 = async () => {
    //This is the function where we are calling the smart contract function to buy the creator coins
    //At the same time we are also updating the database
    //Firstly we are decreasing the value of fcoins that the user holds
    //Secondly we are also changing the values of the CFI and the CCCC

    //Firstly we will decrease the fcoin value
    let result = await fetch("http://localhost:3001/increasefcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: fcoins + fcoins2,
        email,
        creatorcoinsfinal: creatorcoinsreceived - creatorcoins2,
      }),
    });

    let data = await result.json();
    console.log("This is the data", data);
    if (data.error) {
      alert(data.error);
    } else {
      console.log("The buying function has been called");
      //Once we are here it means that the fcoin value has been updated now its the time to update the value of the CFI and CCCC
      let result = await fetch("http://localhost:3001/updatevalues", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cfi,
          cccc,
        }),
      });
    }
  };

  const buycreatorcoins = async () => {
    //This is the function where we are calling the smart contract function to buy the creator coins
    //At the same time we are also updating the database
    //Firstly we are decreasing the value of fcoins that the user holds
    //Secondly we are also changing the values of the CFI and the CCCC

    //Firstly we will decrease the fcoin value
    let result = await fetch("http://localhost:3001/decreasefcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fcoins: fcoins - fcoinvalue,
        email,
        creatorcoinsfinal: creatorcoins + creatorcoinsreceived,
      }),
    });

    let data = await result.json();
    console.log("This is the data", data);
    if (data.error) {
      alert(data.error);
    } else {
      console.log("The buying function has been called");
      //Once we are here it means that the fcoin value has been updated now its the time to update the value of the CFI and CCCC
      let result = await fetch("http://localhost:3001/updatevalues", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          cfi,
          cccc,
        }),
      });
    }
  };
  return (
    <>
      <div className="background">
        <Navbar />
        <div class="both">
          <Sidebar />
          <div class="profilemain">
            <div className="banner">
              <img src={elonbanner} alt="" />
            </div>

            <div class="propic">
              <img src={elonmusk} alt="" />
            </div>

            <div className="profileinfo">
              <h1>Elon Musk</h1>
              <h2>$elonmusk</h2>
              <div class="bio">
                <p>
                  Entrepreneur, CEO Tesla Motors, <br />
                  Spacex, Boring company and Open AI. <br />
                  About to buy Twitter.
                </p>
              </div>
              <div class="ownership">
                <p>
                  If you are “elonmusk” on twitter: <br />
                  1. Tweet you public key. <br />
                  2. You username will be <br />
                  transferred within 24 hours via DMs.
                </p>
              </div>
              <div class="impinfo">
                <div class="infochunk1">
                  <h1>Coins in circulation:</h1>
                  <div class="num">
                    <h1>9,956.093</h1>
                  </div>
                </div>
                <div class="infochunk2">
                  <h1>Market cap:</h1>
                  <div class="num">
                    <h1>71,479.172 Fcoins</h1>
                    <h1>≈$35,739,586.163</h1>
                  </div>
                </div>
                <div class="infochunk3">
                  <h1>Coins in circulation:</h1>
                  <div class="num">
                    <h1>9,956.093</h1>
                  </div>
                </div>
              </div>
              <div class="graph">
                <img src={graph} alt="" />
              </div>
              <div class="inputs">
                <div class="first">
                  <input
                    type="text"
                    onChange={(e) => {
                      changing(e.target.value);
                    }}
                  />
                  <h1>Fcoins</h1>
                </div>

                <div class="second">
                  <input type="text" value={creatorcoins} />
                  <h1>$eloncoins</h1>
                </div>
                <div class="arrow">
                  <img src={arrow} />
                </div>
                <div class="buy">
                  <button
                    onClick={() => {
                      buycreatorcoins();
                    }}
                  >
                    Buy
                  </button>
                </div>
                <div class="balance">
                  <h1>{`Balance: ${fcoins}`}</h1>
                </div>
              </div>
              <br />
              <div class="inputs1">
                <div class="first">
                  <input
                    type="text"
                    onChange={(e) => {
                      changing2(e.target.value);
                    }}
                  />
                  <h1>$eloncoins</h1>
                </div>

                <div class="second">
                  <input type="text" value={fcoins2} />
                  <h1>Fcoins</h1>
                </div>
                <div class="arrow">
                  <img src={arrow} />
                </div>
                <div class="buy">
                  <button
                    onClick={() => {
                      buycreatorcoins2();
                    }}
                  >
                    Sell
                  </button>
                </div>
                <div class="balance">
                  <h1>{`Balance: ${creatorcoinsreceived}`}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Myprofile = () => {
  return (
    <>
      <Navbar />
      <div class="flex flex-row">
        <Sidebar />
        {/* <div class="w-full container items-center"> */}
        <div class="text-gray-700 mt-30 flex flex-col  w-3/4 ml-4 mr-3">
          <div class="w-full  mt-20">
            <div class="flex flex-row">
              <label className="w-3/6 text-3xl font-semibold" for="f3">
                wallet address
              </label>
              <input
                class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Regular input"
                id="f1"
              />
              <svg
                width="27"
                className="w-1/5"
                height="32"
                viewBox="0 0 27 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.4499 4.57145H22.4657C22.4244 4.57145 22.3876 4.58565 22.3492 4.59495V2.5114C22.3492 1.1265 21.1969 0 19.7802 0H2.56895C1.1523 0 0 1.1265 0 2.5114V25.9331C0 27.3179 1.1523 28.4445 2.56895 28.4445H5.5873V29.5784C5.5873 30.9137 6.69545 32 8.05805 32H24.4499C25.8125 32 26.9206 30.9137 26.9206 29.5784V6.99305C26.9206 5.65775 25.8125 4.57145 24.4499 4.57145ZM1.01585 25.9331V2.5114C1.01585 1.687 1.7128 1.0159 2.56895 1.0159H19.7802C20.6364 1.0159 21.3333 1.687 21.3333 2.5114V25.9331C21.3333 26.7575 20.6364 27.4286 19.7802 27.4286H2.56895C1.7128 27.4286 1.01585 26.7575 1.01585 25.9331ZM25.9047 29.5784C25.9047 30.3537 25.252 30.9841 24.4499 30.9841H8.05805C7.25595 30.9841 6.60315 30.3537 6.60315 29.5784V28.4445H19.7802C21.1969 28.4445 22.3492 27.3179 22.3492 25.9331V5.5638C22.3876 5.5731 22.4244 5.5873 22.4657 5.5873H24.4499C25.252 5.5873 25.9047 6.21775 25.9047 6.99305V29.5784V29.5784Z"
                  fill="black"
                />
                <path
                  d="M16.7619 6.60303H5.5873C5.30655 6.60303 5.07935 6.83018 5.07935 7.11093C5.07935 7.39173 5.30655 7.61888 5.5873 7.61888H16.7619C17.0426 7.61888 17.2698 7.39173 17.2698 7.11093C17.2698 6.83018 17.0426 6.60303 16.7619 6.60303Z"
                  fill="black"
                />
                <path
                  d="M16.7619 10.6665H5.5873C5.30655 10.6665 5.07935 10.8937 5.07935 11.1744C5.07935 11.4552 5.30655 11.6824 5.5873 11.6824H16.7619C17.0426 11.6824 17.2698 11.4552 17.2698 11.1744C17.2698 10.8937 17.0426 10.6665 16.7619 10.6665Z"
                  fill="black"
                />
                <path
                  d="M16.7619 14.73H5.5873C5.30655 14.73 5.07935 14.9572 5.07935 15.2379C5.07935 15.5187 5.30655 15.7459 5.5873 15.7459H16.7619C17.0426 15.7459 17.2698 15.5187 17.2698 15.2379C17.2698 14.9572 17.0426 14.73 16.7619 14.73Z"
                  fill="black"
                />
                <path
                  d="M11.6825 18.7935H5.5873C5.30655 18.7935 5.07935 19.0207 5.07935 19.3014C5.07935 19.5822 5.30655 19.8094 5.5873 19.8094H11.6825C11.9633 19.8094 12.1904 19.5822 12.1904 19.3014C12.1904 19.0207 11.9633 18.7935 11.6825 18.7935Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div class="w-full  mt-20">
            <div class="flex flex-row">
              <label className="w-3/6 text-3xl font-semibold" for="f3">
                Email
              </label>
              <input
                class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Regular input"
                id="f1"
              />
              <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Edit
              </button>
            </div>
          </div>
          <div class="w-full  mt-20">
            <div class="flex flex-row">
              <label className="w-3/6 text-3xl font-semibold" for="f3">
                Phone Number
              </label>
              <input
                class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Regular input"
                id="f1"
              />
              <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Edit
              </button>
            </div>
          </div>
          <div class="w-full  mt-20">
            <div class="flex flex-row">
              <label className="w-3/6 text-3xl font-semibold" for="f3">
                Password
              </label>
              <input
                class="w-full h-50 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                type="text"
                placeholder="Regular input"
                id="f1"
              />
              <button className=" ml-5 w-1/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Edit
              </button>
            </div>
          </div>

          <button className=" ml-3 mt-10 items-center w-3/6 h-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Export ptivate key
          </button>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="background">
        <Navbar />
        <div class="both">
          <Sidebar />

          <div class="mainportfolio">
            <h1>There are your current holdings in creator coins</h1>
            <div className="linegraph">
              <img src={linegraph} />
            </div>
            <div className="investedinfo">
              <h2>Total invested</h2>
              <h1>52,459.54 Fcoin</h1>
              <h3>≈$52,459.54</h3>
              <p>
                To see all indivisual transaction timestamps go to <br /> Wallet
              </p>
            </div>

            <div class="column">
              <div class="row">
                <div class="topicsport">
                  <div className="emptyport"></div>
                  <div className="topprofile"></div>
                  <div className="name">
                    <h1>Name</h1>
                  </div>
                  <div class="holdings">
                    <h1>Holdings</h1>
                  </div>

                  <div className="price">
                    <h1>Price</h1>
                  </div>
                  <div className="daymove">
                    <h1>24h</h1>
                  </div>
                  <div className="sevenday">
                    <h1>7d graph</h1>
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell"></div>
                </div>
              </div>

              <div class="row">
                <div class="cardport">
                  <div className="empty"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="holdings">
                    <h1>14,157.64 Fcoins</h1>
                  </div>

                  <div className="price">
                    <h1>$3589.72</h1>
                  </div>
                  <div className="daymove">
                    <h1>+9.50%</h1>
                  </div>
                  <div className="sevenday">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell">
                    <button>Sell</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardport">
                  <div className="empty"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="holdings">
                    <h1>14,157.64 Fcoins</h1>
                  </div>

                  <div className="price">
                    <h1>$3589.72</h1>
                  </div>
                  <div className="daymove">
                    <h1>+9.50%</h1>
                  </div>
                  <div className="sevenday">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell">
                    <button>Sell</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardport">
                  <div className="empty"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="holdings">
                    <h1>14,157.64 Fcoins</h1>
                  </div>

                  <div className="price">
                    <h1>$3589.72</h1>
                  </div>
                  <div className="daymove">
                    <h1>+9.50%</h1>
                  </div>
                  <div className="sevenday">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell">
                    <button>Sell</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardport">
                  <div className="empty"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="holdings">
                    <h1>14,157.64 Fcoins</h1>
                  </div>

                  <div className="price">
                    <h1>$3589.72</h1>
                  </div>
                  <div className="daymove">
                    <h1>+9.50%</h1>
                  </div>
                  <div className="sevenday">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell">
                    <button>Sell</button>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="cardport">
                  <div className="empty"></div>
                  <div className="profilepic">
                    <img src={elonmusk} alt="img" />
                  </div>
                  <div className="name">
                    <h1>$elonmusk</h1>
                  </div>
                  <div class="holdings">
                    <h1>14,157.64 Fcoins</h1>
                  </div>

                  <div className="price">
                    <h1>$3589.72</h1>
                  </div>
                  <div className="daymove">
                    <h1>+9.50%</h1>
                  </div>
                  <div className="sevenday">
                    <img src={sevenday} alt="img" />
                  </div>
                  <div className="profitloss">
                    <h1>+12.139 Fcoins</h1>
                  </div>
                  <div className="sell">
                    <button>Sell</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Wallet = () => {
  // let obj = useContext(Context);
  // console.log("This is the context object that was passed here:", obj);
  const [walletaddress, setwalletaddress] = useState("");
  const [err, seterr] = useState(false);
  const [state, setstate] = useState({
    web3: null,
    contract1: null,
  });

  const [email, setemail] = useState("");

  const [etherstosell, setetherstosell] = useState(0);
  const [contractaddress, setcontractaddress] = useState();
  const [jwt, setjwt] = useState("");
  const [fcoins, setfcoins] = useState(5);
  const [creatorcoins, setcreatorcoins] = useState();

  // let data2;
  useLayoutEffect(() => {
    //check local token or something
    async function getid() {
      let finaldata = {};
      let _data = await document.cookie.split(";");
      await _data.forEach((element, i) => {
        let temp = element.split("=");
        let key = temp[0];
        let value = temp[1];
        let tempobj = {
          [`${key}`]: value,
        };
        Object.assign(finaldata, tempobj);
      });
      let _jwt = finaldata.jwt;
      // jwtglobal = finaldata.jwt;
      // jwtfinal.current = finaldata.jwt;
      // console.log("This is the jwt token", _jwt);
      // setjwt(_jwt);
      // jwt.current=_jwt;
      console.log("This is the jwt", _jwt);

      let data2 = await fetch("http://localhost:3001/getdetails", {
        method: "POST",
        body: JSON.stringify({
          _jwt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        return response.json();
      });

      console.log("This is the response for the data from backend", data2);
      let { fcoins, email, creatorcoins } = data2;
      setfcoins(fcoins);
      setemail(email);
      setcreatorcoins(creatorcoins);

      if (data2.error) {
        seterr(true);
      }

      // console.log("This is the data we get after verifying the jwt", data2);
      // id.current = data2.data;
      // idglobal = data2.data;
      // userdata.current = data2.data2[0];

      //Ok so we now have the jwt for the profile
      //The next step is to get the data from the jwt
      //There are actually two approaches
      //When accessing myprofile we need to id for us which is available from the jwt
      //When accessing other person's profile we need the id for that other person which cannot be obtained from jwt
      //Since here we are accessing myprofile we are going to take the id via jwt
    }

    getid();
  }, []);
  useEffect(() => {
    //First we are creating the web3
    //Here we are creating an instance of the web3 library
    async function assign() {
      let web3 = new Web3(
        "wss://rinkeby.infura.io/ws/v3/40013e8122f34b3ea56d347c05228698"
      );
      //Now this is the network id
      //The network id will help us in getting the contract address
      //Like for ganache the network id is 5777
      let networkId = await web3.eth.net.getId();

      //The networkId variable now contains the value 5777
      const deployedNetwork1 = await Transferethers.networks[networkId];
      // const deployedNetwork2 = await EthSwap.networks[networkId];

      //Hence we have now got the contract addresses of both the accounts
      await console.log(
        "Transfer ethers contract address",
        deployedNetwork1.address
      );

      setcontractaddress(deployedNetwork1.address);
      // await console.log("EthSwap contract address", deployedNetwork2.address);

      //Now we are creating the instances of the smart contract
      //As we have already seen for creating instances of the smart contract we basically need two things the ABI and the contract address
      const instance1 = await new web3.eth.Contract(
        Transferethers.abi,
        deployedNetwork1 && deployedNetwork1.address
      );

      // const instance2 = await new web3.eth.Contract(
      //   EthSwap.abi,
      //   deployedNetwork2 && deployedNetwork2.address
      // );

      //Thus we have now obtained the instances of both the contracts and we can work with these instances to access the functions

      setstate({ web3, contract1: instance1 });
      console.log("This useEffect is now complete");
    }

    assign();
  }, []);

  async function transferfunds() {
    console.log("The transfer function is called");
    let { web3, contract1 } = state;
    let sending = await web3.utils.toWei(etherstosell.toString(), "ether");
    console.log("The amount of ethers to transfer in wei", sending);
    console.log(contract1.methods, "These are the methods of the contract 1");

    let ethersvalue = await web3.utils.toBN(sending);
    // let value = await contract1.methods.transfer().send({
    //   from: walletaddress,
    //   value: sending,
    // });
    console.log("This is the wallet address", walletaddress);
    const tx = {
      from: walletaddress,
      to: contractaddress,
      value: ethersvalue,
      gas: 500000,
      maxPriorityFeePerGas: 1999999987,
      data: contract1.methods.transfer().encodeABI(),
    };

    //Now once the transaction object is created we need to sign the transaction
    //For signing the transaction we need the private key of the account
    const signedtx = await web3.eth.accounts.signTransaction(
      tx,

      "0c7fcfbf8330ec840cae0000ba1553f5bcd6070e51747c72c24412b5979fda8f"
    );

    //Now we are sending the signed transaction
    const transactionReceipt = await web3.eth.sendSignedTransaction(
      signedtx.rawTransaction,
      function (err, hash) {
        if (!err) {
          console.log("The hash of your transaction is", hash);
        } else {
          console.log("Something went wrong!", err);
        }
      }
    );

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
    //As we have received the transaction receipt it means that everything worked fine
    //Now is the time to call the main function
    // main(etherstosell);
    let data = await fetch("http://localhost:3002/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: etherstosell,
      }),
    });

    let result = await data.json();

    // console.log(
    //   result,
    //   "These are the number of fcoins that the user has bought"
    // );

    let finalans = result.result;
    console.log("These are the fcoins that the user has bought", finalans);

    //Now we need to pass this value in the backend and add it to the fcoins that the user has
    let result2 = await fetch("http://localhost:3001/addfcoins", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        finalans,
      }),
    });

    let ans2 = await result2.json();

    console.log(
      "After the number of fcoins have been updated the new value is:",
      ans2
    );

    let { fcoinsafter } = ans2;
    setfcoins(fcoinsafter);

    //Hence this means that everything is completed successfully
    alert("The funds are transferred and you have received the fcoins");
  }

  async function connectwallet() {
    console.log("This is the wallet");
    if (window.ethereum) {
      console.log("Metamask wallet detected");
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      // setaddress(accounts[0]);

      console.log(accounts);
      setwalletaddress(accounts[0]);
    } else {
      console.log("The wallet has not been found");
    }
  }

  if (err) {
    return <div>The user needs to login to access the profile</div>;
  }

  return (
    <div className="background">
      <>
        <Navbar />
        <div className="both">
          <Sidebar />
          <div className="mainwallet">
            <div className="leftofwallet">
              <p>To start investing in creators add balance to your account</p>
              <img src={identicon} alt="" width="200px" height="200px" />
              <h1>Name</h1>

              <div className="walletaddress">
                <h1>Wallet address</h1>
                <div class="address">
                  <p>
                    {walletaddress}
                    <button>Copy</button>
                  </p>
                </div>
              </div>
              <div className="fwalletbalance">
                <h1>Balance in wallet</h1>
                <br></br>
                <table>
                  <tr>
                    <th>Timestamp</th>
                    <th>Amount</th>
                    <th>State</th>
                  </tr>

                  <tr>
                    <td>13 days 4 hours ago</td>
                    <td>2.54 Fcoin</td>
                    <td>Added</td>
                  </tr>

                  <tr>
                    <td>7 days 23 hours ago </td>
                    <td>3.29 Fcoin</td>
                    <td>Withdrawn</td>
                  </tr>

                  <tr>
                    <td>14 days 15 hours ago </td>
                    <td>12.95 Fcoin</td>
                    <td>Withdrawn</td>
                  </tr>

                  <tr>
                    <td>23 days 1 hours ago </td>
                    <td>5.05 Fcoin</td>
                    <td>Added</td>
                  </tr>

                  <tr>
                    <td>59 days 15 hours ago </td>
                    <td>12.95 Fcoin</td>
                    <td>Added</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="rightofwallet">
              <div class="balancebox">
                <h1>Balance available</h1>
                <div class="amountcolor">
                  <h1>{`${fcoins} Fcoin`}</h1>
                </div>
                <p>{`≈$${fcoins}`}</p>
                <div class="amountcolor">
                  <h1>{`${creatorcoins} Elon Musk Coins`}</h1>
                </div>
              </div>
              <div className="bwinput">
                <input
                  type="text"
                  placeholder="Enter amount..."
                  onChange={(e) => setetherstosell(e.target.value)}
                />
                <h1>Fcoins</h1>
              </div>
              <div className="waamount">
                <div className="wbutton">
                  <button>Withdraw</button>
                </div>
                <div className="wbutton">
                  <button
                    onClick={(e) => {
                      connectwallet();
                    }}
                  >
                    Connect Wallet
                  </button>
                </div>
                <div className="abutton">
                  <button
                    onClick={(e) => {
                      transferfunds();
                    }}
                  >
                    Add amount
                  </button>
                </div>
              </div>

              <div className="cointransactions">
                <table>
                  <tr>
                    <th>Timestamp</th>
                    <th>Amount</th>
                    <th>State</th>
                  </tr>

                  <tr>
                    <td>text</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>

                  <tr>
                    <td>Centro</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>

                  <tr>
                    <td>text</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

function App() {
  const [usercontext, setusercontext] = useState({
    email: null,
    fcoins: null,
    creatorcoins: null,
  });
  return (
    <Context.Provider value={(usercontext, setusercontext)}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/docs" element={<Docs />} />
        <Route exact path="/features" element={<Features />} />
        <Route exact path="/trends" element={<Trends />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
        <Route exact path="/wallet" element={<Wallet />} />
        <Route exact path="/signup" element={<Login_signup />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
