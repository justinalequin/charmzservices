import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Layout from "../layout/Layout";
import heroPic from "../images/heroNotary.jpeg";
import navBack from "../images/navBack.jpg";
import trained from "../images/trained.png";
import agent from "../images/agent.png";
import npFL from "../images/npFL.png";
import officiant from "../images/officiant.png";
import aan from "../images/aan.png";
import loli from "../images/loli.jpeg";

//Main Color : White
//Secondary : Black
//Third: Pink

function HomePage() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "bitter",
        }}
      >
        <div
          className="heroContainer"
          style={{
            backgroundImage: `url(${navBack})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            height: "70vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            borderBottom: "solid 16px rgba(157, 121, 77, .7)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0px",
              borderImage: "linear-gradient(to left, white, black) 2",
            }}
          >
            <p
              className="heroText"
              style={{
                textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
                fontFamily: "bitter",
              }}
            >
              TAMPA'S PREMIER MOBILE NOTARY SERVICE
            </p>
          </div>
          <Link to="/contact" style={{ margin: "auto" }}>
            <button
              className="appointmentButt"
              style={{
                backgroundColor: "rgba(249, 42, 161, .4)",
                padding: "4px",
                borderRadius: "8px",
                border: "solid rgba(250, 250, 250, .4) 1px",
                textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
              }}
            >
              <p
                style={{
                  fontSize: "2.5vh",
                  fontFamily: "bitter",
                  fontWeight: "bold",
                  textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
                }}
              >
                SCHEDULE AN APPOINTMENT
              </p>
            </button>
          </Link>

          <div style={{ position: "absolute", bottom: "0" }}>
            <ul
              style={{
                backgroundColor: "rgba(250,250,250, .6)",
                padding: "4px",
                width: "99vw",
              }}
            >
              <li style={{ fontSize: "2vh" }}>Acknowledgments</li>
              <li style={{ fontSize: "2vh" }}>Jurats</li>
              <li style={{ fontSize: "2vh" }}>Oaths/ Affirmations</li>
              <li style={{ fontSize: "2vh" }}>Wedding Officant</li>
              <li style={{ fontSize: "2vh" }}>Loan Signing Agent</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            width: "90vw",
            backgroundColor: "rgba(157, 121, 77, .8)",
            margin: "24px",
            borderRadius: "4px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            justifyContent: "space-around",
            padding: "4px",
          }}
        >
          <img className="certs" src={npFL}></img>
          <img className="certs" src={agent}></img>
          <img className="certs" src={trained}></img>
          <img className="certs" src={officiant}></img>
          <img className="certs" src={aan}></img>
        </div>

        <div
          className="aboutContainer"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "44px",
          }}
        >
          <p style={{ fontSize: "5vh", fontWeight: "bold" }}>ABOUT US</p>
          <div className="aboutContainer">
            <div className="aboutImageContainer">
              <img
                className="loliPic"
                src={loli}
                style={{ borderRadius: "4px" }}
              ></img>
            </div>
            <div
              className="aboutTextContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="aboutText">
                Hi! My name is Lauren "Loli" Thompson. I am a licensed mobile
                notary public in the Tampa Bay area. I provide service in
                Hillborough County, Pinellas County, and Pasco County. If you
                have any questions, feel free to reach out and I'll get back to
                you in a timely manner.
              </p>

              <Link to="/contact" style={{ margin: "auto" }}>
                <button
                  className="appointmentButt"
                  style={{
                    backgroundColor: "rgba(249, 42, 161, .4)",
                    padding: "4px",
                    borderRadius: "8px",
                    border: "solid rgba(250, 250, 250, .4) 1px",

                    textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2.5vh",
                      fontFamily: "bitter",
                      fontWeight: "bold",
                      textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
                    }}
                  >
                    SCHEDULE AN APPOINTMENT
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
