import "./Contact.css";
import React,{ useContext } from "react";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
    <div className="contact-form" id="Contact">
      <div className="c-left">
        <div className="awesome">
          <span style={{color: darkMode ? "white" : ""}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          >
         </div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form action="https://formspree.io/f/xvonbnnl" method="POST" className="contact-inputs">
          <input type="text" name="user_name" className="user"  placeholder="Name" autoComplete="off" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" autoComplete="off" required/>
          <textarea name="message" className="user" placeholder="Message" autoComplete="off" required/>
          <input type="submit" value="Send" className="button"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;