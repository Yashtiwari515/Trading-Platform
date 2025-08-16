import React from "react";

function LeftSec({
  imageUrl,
  name,
  description,
  trylink,
  googlelink,
  applelink,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 ">
          <img src={imageUrl} alt="Image" />
        </div>
        <div className="col-2"></div>
        <div className="col-5  p-5">
          <h2 className="font-serif fw-bold">{name}</h2>
          <p className="para">{description}</p>
          <div className="mt-4">
            <a href={trylink}>
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlelink}> <img
              src="media\images\googlePlayBadge.svg"
              alt="GooglePlayStore"
              style={{ cursor: "pointer" }}
            /></a>
            <a href={applelink}> <img
              src="media\images\appstoreBadge.svg"
              alt="AppleStore"
              style={{ marginLeft: "2rem", cursor: "pointer" }}
            /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSec;
