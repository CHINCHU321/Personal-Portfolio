import React from "react";
import './Services.css';
import glasses from '../../img/glasses.png';
import Card from "../Card/Card";
import resume from './resume.pdf';
const Services = () => {
  return(
    <div className="services">
        {/*left side*/}
        <div className="awesome">
          <span>My Awesome</span>
          <span>service</span>
          <span>
            Build custom applications and solutions for changing
          <br/>
            business requirements to provide agility.
          </span>
          <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
       </div>
            {/*right side*/}
        <div>
          <Card
          emoji ={glasses}
          heading ={'Developer'}
          details ={'Html, Css, Sass JavaScript, ReactJS'}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)"}}>

        </div>
      </div>
  );
};
export default Services;