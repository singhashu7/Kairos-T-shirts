import React from 'react';
import { Fragment, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navber from "D:/college/Kairos T-shirts Project/client/src/components/shop/partials/Navber.js";
import "D:/college/Kairos T-shirts Project/client/src/components/shop/partials/style.css";
import contact from "D:/college/Kairos T-shirts Project/client/src/components/Images/contact2.jpg";

export default function Contactform() {
  return (
    
    <div>
    <Navber/>
  <div style={{marginTop:"170px"}}>
        <img src={contact} alt="map" style={{marginTop:"-80px",marginLeft:'-10px',marginRight:"0px"}}/>
        <div className="row" style={{marginRight:"30px",marginTop:"60px"}}>
        <ul className="fa-ul fs-5" style={{ marginLeft: "850px",marginTop:"-400px",fontWeight:"bolder",fontSize:"23px"}}>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-home" />
                </span>
                <span className="ms-2">Varanasi, India</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-envelope" />
                </span>
                <span className="ms-2">kairosofficial1990@gmail.com</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-phone" />
                </span>
                <span className="ms-2">+ 91 9792080890</span>
              </li>
              <li className="mb-3">
                <span className="fa-li">
                  <i className="fas fa-print" />
                </span>
                <span className="ms-2">+ 91 9696792050</span>
              </li>
            </ul>
        </div>
    </div>
    </div>
  )
}
