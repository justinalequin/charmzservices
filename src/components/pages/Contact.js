import React, { useRef } from "react";
import Layout from "../layout/Layout";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63mrerc",
        "template_c9uv65r",
        form.current,
        "NxqJXRT5_OUZ2QIuS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <div>
          <p
            style={{
              fontSize: "5vh",
              fontFamily: "bitter",
              fontWeight: "bold",
            }}
          >
            Contact
          </p>
        </div>

        <div className="contactInstructions">
          <p>
            Please let us know what type of service you require and a{" "}
            <b>TIME / DATE</b> that you have in mind. Also, please include your{" "}
            <b>PHONE NUMBER</b> in your message so I can reach you promptly. I
            look forward to hearing from you!
          </p>
        </div>

        <div
          style={{
            border: "solid black 2px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "22px",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              <label>Message</label>
              <textarea name="message" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
