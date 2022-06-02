
import React from 'react';
import { Fragment, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navber from "D:/college/Kairos T-shirts Project/client/src/components/shop/partials/Navber.js";
import 'D:/college/Kairos T-shirts Project/client/src/components/aboutus.css';
import img1 from "D:/college/Kairos T-shirts Project/client/src/components/Images/klogo1.png";


const AboutUs = () => {
  return(
  <>
  <title >About Us</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  />
  <link rel="stylesheet" type="text/css" href="css/aboutus.css" />
  <Navber/>
  <div className="section" style={{backgroundColor:"#FDFFFC",marginTop:"50px"}}>
    <div className="container">
      <div className="content-section">
        <div className="title">
          <h1 style={{fontWeight:"bold",fontSize:"50px"}}>About Us</h1>
        </div>
        <div className="content">
          <h3 style={{color:"black"}}>KAIROS- RIGHT TIME RIGHT PLACE</h3>
          <p>
          Trying new things even when success is not guaranteed.
          Not stepping on others to get ahead.
          Thinking about the benefit of others just as you’d think about your own.

          KAIROS was founded in 2020.
          With the belief that a business cannot be about financial gain alone.
          </p>
          <div className="button " style={{marginTop:"100px"}}>
            <a >Thank You</a>
          </div>
        </div>
        <div className="social">
          <a href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="">
            <i className="fab fa-twitter" />
          </a>
          <a href="">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="image-section " style={{marginTop:"-70px",width:"400px"}}>
        <img src={img1} />
      </div>
    </div>
  </div>
</>
  );
  };

export default AboutUs;