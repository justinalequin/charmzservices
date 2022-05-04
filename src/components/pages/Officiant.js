import React from "react";
import Layout from "../layout/Layout";
import loliOff from "../images/loliofficiant.png";
import "./Officiant.css";

function Officiant() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "5vh",
              fontFamily: "bitter",
              fontWeight: "bold",
            }}
          >
            Officant Services
          </p>
        </div>
        <div>
          <div>
            <img
              className="officiantPic"
              src={loliOff}
              style={{ borderRadius: "4px" }}
            ></img>
          </div>
          <div>
            <p>Words about offiant services</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Officiant;
