import React, { useState } from "react";
import "./login_signup.css";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";

const Login_signup = () => {
  let nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const mutation = useMutation(async (string, obj) => {
    console.log("Is it even mutating");
    let data = await fetch(`http://localhost:3001/${string}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    console.log("Is the repsonse even returned");
    let res = await data.json();
    console.log("Is the repsonse even returned 2");
    console.log(res);
    console.log("Now the cookie is going to be assigned");
    document.cookie = `jwt=${res.token};max-age=18000;`;
    if (res.error) {
      console.log("This is the error", res.error);
      alert(res.error);
    } else {
      console.log(res.Connection);
      console.log();
      alert("The user has been logged in successfully");
      nav("/");
    }
  });

  function Submitted(e) {
    e.preventDefault();
    let obj = { email, password };
    console.log(obj, "This is the object that is passed inside the login");
    mutation.mutateAsync("api/login", obj);
  }
  const handleSignIn = () => {
    document
      .querySelector("#modalContainer")
      .classList.remove("right-panel-active");
  };
  const handleSignUp = () => {
    document
      .querySelector("#modalContainer")
      .classList.add("right-panel-active");
  };

  function signupsubmitted(e) {
    e.preventDefault();
    let obj = {
      email,
      password,
    };
    console.log(obj);
    mutation.mutateAsync("api/signup", obj);
  }

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer" id="modalContainer">
          <div className="form-container sign-up-container">
            <form className="modalForm" onSubmit={signupsubmitted}>
              <h1 className="title">Create Account</h1>
              <input
                className="input-modal"
                name="name"
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                onClick={(e) => {
                  signupsubmitted(e);
                }}
              >
                Sign Up
              </button>
              {/* <input type="submit" value="Sign Up"></input> */}
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="modalForm" onSubmit={Submitted}>
              <h1 className="title">Welcome Back 🎉</h1>
              <br />
              <span className="spanText mt-2">or use your account</span>
              <input
                className="input-modal"
                name="email"
                type="name"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="input-modal"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <input type="submit" value="Sign In"></input> */}
              <button
                onClick={(e) => {
                  Submitted(e);
                }}
              >
                Sign In
              </button>
              {/* <a href="/" className="anchorText">
                Forgot your password?
              </a> */}
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="title">Welcome Back!</h1>
                <p className="paraText">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost modalButton"
                  id="signIn"
                  onClick={handleSignIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="title">Hello, Friend!</h1>
                <p className="paraText">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost modalButton"
                  id="signUp"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_signup;
