import React from "react";
import Hero from "./Hero";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSec
        imageUrl="media\images\kite.png"
        name="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trylink="https://kite-demo.zerodha.com/dashboard"
        googlelink="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        applelink="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
      />
      <RightSec
        name="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        imageUrl="media\images\console.png"
      />
      <LeftSec
        imageUrl="media\images\coin.png"
        name="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trylink="https://coin.zerodha.com/"
        googlelink="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        applelink="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
      />
      <RightSec name="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        imageUrl="media\images\kiteconnect.png" />
      <LeftSec
        imageUrl="media\images\varsity.png"
        name="Varsity Mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trylink=""
        googlelink="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        applelink="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
