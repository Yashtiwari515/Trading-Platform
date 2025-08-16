import React from "react";

function Team() {
  return (
    <div className="container">
        <hr  className="mb-4"/>
      <div className="row space ">
        <h2 className="space text-center">People</h2>
        <div className="col-6 p-3 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            alt="Founder Image"
            style={{ width: "50%", borderRadius: "100%" }}
          />

          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            Playing basketball is his zen.
          </p>
          <p className="fs-5" style={{ lineHeight: "1.8" }}>
            Connect on{" "}
            <a
              href="https://nithinkamath.me/"
              style={{ textDecoration: "none" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://x.com/Nithin0dha"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
