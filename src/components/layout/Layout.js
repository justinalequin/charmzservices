import React from "react";
import Header from "./Header";

import "./Layout.css";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="appLayout">
      <div
        style={{
          marginBottom: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
      </div>

      <div>{children}</div>

      <div
        style={{
          width: "100vw",
          position: "fixed",
          bottom: "0",
        }}
      ></div>
    </div>
  );
};

export default Layout;
