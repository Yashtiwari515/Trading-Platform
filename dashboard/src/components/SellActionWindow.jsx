import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, price }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price || 0);
  const [maxQuantity, setMaxQuantity] = useState(0); // from holdings

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allHoldings`)
      .then((res) => {
        const holding = res.data.find((h) => h.name === uid);
        if (holding) {
          setMaxQuantity(holding.qty);
        } else {
          setMaxQuantity(0);
        }
      })
      .catch((err) => console.error("Error fetching holdings:", err));
  }, [uid]);

  const handleSellClick = () => {
    if (stockQuantity > maxQuantity) {
      alert(`You can only sell up to ${maxQuantity} shares of ${uid}`);
      return;
    }

    axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });
    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty. (Max: {maxQuantity})</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              max={maxQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin received ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
