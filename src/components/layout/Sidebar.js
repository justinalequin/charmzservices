import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default (props) => {
  return (
    <Menu>
      <Link to="/services">
        <a className="menu-item" href="/">
          OUR SERVICES
        </a>
      </Link>

      <Link to="/officiant">
        <a className="menu-item" href="/salads">
          OFFICIANT
        </a>
      </Link>

      <Link to="/virtual">
        <a className="menu-item" href="/pizzas">
          VIRTUAL NOTARY
        </a>
      </Link>

      <Link to="/contact">
        <a className="menu-item" href="/desserts">
          CONTACT US
        </a>
      </Link>
    </Menu>
  );
};
