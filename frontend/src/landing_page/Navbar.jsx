import React from "react";
import '../index.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom mb-3" style={{backgroundColor:"white"}}>
      <div class="container p-3">
        <Link class="navbar-brand" to="/">
          <img src="media\images\logo.svg" alt="Logo" style={{width:"25%"}} />
        </Link>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " aria-current="page" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
