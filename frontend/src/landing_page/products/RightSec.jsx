import React from "react";

function RightSec({ name, description, imageUrl }) {
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-5 aboutcss p-5">
          <h2 className="font-serif fw-bold">{name}</h2>
          <p className="para"> {description}</p>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={imageUrl} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default RightSec;
