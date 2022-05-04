import React from "react";
import Layout from "../layout/Layout";

function Virtual() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
            Virtual Notary
          </p>
        </div>

        <div>
          <p style={{ fontSize: "2.5vh", fontFamily: "bitter" }}>
            More to come. Check back soon!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Virtual;
