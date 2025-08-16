import React from "react";

function Footer() {
  return (
    
    <div className="container ">
      <hr />
      <div className="row">
        <div className="col-3 mt-3">
          <img
            src="media\images\logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
          <p className="footerpara mt-3">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>

          <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
          <hr />
        </div>
        <div className="col-1"></div>
        <div className="col-3  mt-3">
          <h4>Account</h4>
          <ul className="footerlist">
            <li><a href=""> Open demat account </a> </li>
            <li><a href=""> Minor demat account </a></li>
            <li><a href=""> NRI demat account</a></li>
            <li><a href=""> Commodity</a></li>
            <li><a href=""> Dematerialisation</a></li>
            <li><a href=""> Fund transfer</a></li>
            <li><a href=""> MTF</a></li>
            <li><a href=""> Referral program</a></li>
          </ul>
        </div>
        <div className="col-3  mt-3">
          <h4>Support</h4>
          <ul className="footerlist">
            <li><a href="" >Contact us </a></li>
            <li><a href="" >Support portal</a></li>
            <li><a href="" >How to file a complaint?</a></li>
            <li><a href="" >Status of your complaints</a></li>
            <li><a href="" >Bulletin</a></li>
            <li><a href="" >Circular</a></li>
            <li><a href="" >Z-Connect blog</a></li>
            <li><a href="" >Downloads</a></li>
          </ul>
        </div>
        <div className="col-2  mt-3">
          <h4>Company</h4>
          <ul className="footerlist">
            <li><a href="" >About </a></li>
            <li><a href="" >Philosophy</a></li>
            <li><a href="" >Press & media</a></li>
            <li><a href="" >Careers</a></li>
            <li><a href="" >Zerodha Cares (CSR)</a></li>
            <li><a href="" >Zerodha.tech</a></li>
            <li><a href="" >Open source</a></li>
          </ul>
        </div>
      </div>
      <div>
        <p style={{color:"#666"}}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
        </p>
      </div>
    </div>
  );
}

export default Footer;
