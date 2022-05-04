import React from "react";
import { useState } from "react";
import logo from "../images/charmzLogo.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import "./Header.css";

function Header() {
  const [hamburger, setHamburger] = useState(false);

  const showHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div
      className="navBarContainer"
      style={{
        backgroundColor: "black",
        display: "flex",

        borderBottom: "solid 16px rgba(157, 121, 77, .7)",
      }}
    >
      <div className="mobileNavContainer">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"mobileNavContainer"}
        />
      </div>

      <Link to="/">
        <img src={logo} style={{ height: "12vh" }}></img>
      </Link>

      <div className="fullScreenNavOptions" style={{ margin: "auto" }}>
        <ul
          className="navOptions"
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            width: "70vw",
            fontFamily: "bitter",
            fontWeight: "bold",
          }}
        >
          <Link to="/">
            <li>WELCOME</li>
          </Link>
          <Link to="/services">
            <li>OUR SERVICES</li>
          </Link>

          <Link to="/officiant">
            <li>OFFICIANT SERVICES</li>
          </Link>

          <Link to="/virtual">
            <li>VIRTUAL NOTARY</li>
          </Link>

          <Link to="/contact">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
