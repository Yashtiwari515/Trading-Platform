import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

export const GeneralContext = React.createContext({
  openTradeWindow: (uid, price, type) => {}, 
  closeTradeWindow: () => {},
});

const GeneralContextProvider = (props) => {
  const [isTradeWindowOpen, setIsTradeWindowOpen] = useState(false);
  const [tradeType, setTradeType] = useState("");
  const [selectedStock, setSelectedStock] = useState({ uid: "", price: 0 });

  const handleOpenTradeWindow = (uid, price, type) => {
    setIsTradeWindowOpen(true);
    setTradeType(type);
    setSelectedStock({ uid, price });
  };

  const handleCloseTradeWindow = () => {
    setIsTradeWindowOpen(false);
    setTradeType("");
    setSelectedStock({ uid: "", price: 0 });
  };

  return (
    <GeneralContext.Provider
      value={{
        openTradeWindow: handleOpenTradeWindow,
        closeTradeWindow: handleCloseTradeWindow,
      }}
    >
      {props.children}

      {isTradeWindowOpen && tradeType === "BUY" && (
        <BuyActionWindow uid={selectedStock.uid} price={selectedStock.price} />
      )}

      {isTradeWindowOpen && tradeType === "SELL" && (
        <SellActionWindow uid={selectedStock.uid} price={selectedStock.price} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
