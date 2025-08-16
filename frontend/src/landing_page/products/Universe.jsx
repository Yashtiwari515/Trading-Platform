import React from "react";

import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h3 className="font-serif aboutcss">
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/" style={{ textDecoration: "none" }}>
            {" "}
            Zerodha.tech{" "}
          </a>{" "}
          blog.
        </h3>
      </div>
      <div className="row text-center">
        <h2 className="font-serif fw-bold mb-3">The Zerodha Universe</h2>
        <p className="fs-4 mt-2">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5 mx-4">
        <div className="col-4">
          <a href="https://www.zerodhafundhouse.com/">
            {" "}
            <img
              src="media\images\zerodhaFundhouse.png"
              style={{ width: "60%" }}
            />{" "}
          </a>
        </div>
        <div className="col-4">
          <a href="https://sensibull.com/">
            {" "}
            <img
              src="media\images\sensibullLogo.svg"
              style={{ width: "70%" }}
            />{" "}
          </a>
        </div>
        <div className="col-4">
          <a href="https://www.tijorifinance.com/ideas-dashboard/">
            {" "}
            <img src="media\images\tijori.svg" style={{ width: "60%" }} />
          </a>
        </div>
      </div>
      <div className="row aboutcss mx-4">
        <div className="col-4">
          <a href="https://www.streak.tech/home">
            {" "}
            <img
              src="media\images\streakLogo.png"
              style={{ width: "60%" }}
            />{" "}
          </a>
        </div>
        <div className="col-4">
          <a href="https://smallcase.zerodha.com/">
            {" "}
            <img
              src="media\images\smallcaseLogo.png"
              style={{ width: "60%" }}
            />{" "}
          </a>
        </div>
        <div className="col-4">
          <a href="https://joinditto.in/">
            {" "}
            <img
              src="media\images\dittoLogo.png"
              style={{ width: "50%" }}
            />{" "}
          </a>
        </div>
      </div>
      <div className="row text-center space">
        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5 signupbtn mt-4 "
            style={{ width: "15%", margin: "0 auto" }}
          >
            Sign Up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
