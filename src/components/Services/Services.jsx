import React,{ useContext } from "react";
import { themeContext } from "../../Context";
import './Services.css';
import glasses from '../../img/glasses.png';
import Card from "../Card/Card";
import MyResume from './MyResume.pdf';
import { motion } from 'framer-motion';

const Services = () => {
  const transition = {duration: 1, type: 'spring',};

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="services" id='Services'>
        {/*left side*/}
        <div className="awesome">
          <span style={{color: darkMode ? "white" : ""}}>My Awesome</span>
          <span>service</span>
          <span >
            Build custom applications and solutions for changing
          <br/>
            business requirements to provide agility.
          </span>
          <a href={MyResume} >
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
       </div>
            {/*right side*/}

        <motion.div
            initial={{ left: "30rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Card
            emoji ={glasses}
            heading ={'Developer'}
            details ={'Html, Css, Sass JavaScript, ReactJS, React Native'}
            />
        </motion.div>
        <div className="blur s-blur2" style={{ background: "var(--purple)"}}>

        </div>
      </div>
  );
};
export default Services;