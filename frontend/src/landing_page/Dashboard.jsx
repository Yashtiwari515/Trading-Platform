import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5174/*", { withCredentials: true })
      .then(res => {
        console.log(res.data); // Debug
        setData(res.data);
      })
      .catch(err => {
        console.log(err.response?.data || err.message);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {data ? (
        data.status ? (
          <p>Welcome {data.email}</p>
        ) : (
          <p>{data.message}</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
