import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Chinchubabuofficial@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/chinchu____mariam/">
          <Insta color="white" size={"3rem"} />
        </a>
        <a href="https://www.facebook.com/chinchu.babu.779/">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/CHINCHU321">
          <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/chinchu-babu-1568b51a3/">
          <LinkedIn color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

