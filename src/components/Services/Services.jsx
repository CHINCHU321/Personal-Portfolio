import React,{ useContext } from "react";
import { themeContext } from "../../Context";
import './Services.css';
import glasses from '../../img/glasses.png';
import Card from "../Card/Card";
//import MyResume from './MyResume.pdf';

const Services = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="services" id='Services'>
        {/*left side*/}
        <div className="awesome">
          <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
          <span>Service</span>
          <span >
            Build custom applications and solutions for changing
          <br/>
            business requirements to provide agility.
          </span>{/*
          <div className="wiggle">
          <a href={MyResume}>
          <button className="button s-button">Download CV</button>
          </a>
          </div>*/}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
       </div>
            {/*right side*/}

        <div className="cards" >
            <Card
            emoji ={glasses}
            heading ={'Developer'}
            details ={'Html, Css, Sass, Tailwind Css, JavaScript, ReactJS, Redux'}
            />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)"}}>

        </div>
      </div>
  );
};
export default Services;