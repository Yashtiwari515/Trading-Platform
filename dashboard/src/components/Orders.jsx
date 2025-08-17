import React, { useState, useEffect } from "react";
import axios from "axios";
import NoOrders from "./NoOrders";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allOrders`, {
        withCredentials: true,
      })
      .then((res) => {
        setAllOrders(res.data);
      });
  }, []);

  return (
    <>
      <div className="orders">
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>

            {allOrders.map((stock, index) => {
              const modeClass = stock.mode === "BUY" ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td> {stock.name} </td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={modeClass} style={{ fontSize: "0.8rem" }}>
                    {stock.mode}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        {allOrders.length === 0 && <NoOrders />}
      </div>
    </>
  );
};

export default Orders;
