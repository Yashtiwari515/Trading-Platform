import React from "react";
import "./Style.css";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container space">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-4 mb-2 font-serif fw-bold">Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

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

export default Hero;
