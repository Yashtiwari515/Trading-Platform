import React from "react";

import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container space">
      <div className="row text-center">
        <h2 className=" mb-3">Open a Zerodha account</h2>

        <p
          className="fs-5"
          style={{ lineHeight: "1.8", paddingRight: "1.2rem" }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
