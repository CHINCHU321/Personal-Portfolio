import React,{ useContext } from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import mypic1 from '../../img/mypic1.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import {motion} from 'framer-motion';
import {Link} from 'react-scroll'

const Intro = () => {
const transition = {duration : 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode ? "white" : ""}}>Hy! I Am</span>
          <span>Chinchu Babu</span>
          <span>
            Passionate and self-taught Front end developer capable of learning
            and adopting the latest technologies. A solid mind to tasks and responsibility
            to track and review progress until the committed job is completed. Possess a 
            solid commitment to the team environment and enjoy working as a team member and 
            independently. Does works with great passion and determination
          </span>

        </div>
        <Link spy={true} to='Contact' smooth={true} >

        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/CHINCHU321">
          <img src={Github} alt=''/>
          </a>
          
          <a href="https://www.linkedin.com/in/chinchu-babu-1568b51a3/">
          <img src={LinkedIn} alt=''/>

          </a>
          <a href="https://www.instagram.com/chinchu____mariam/">
          <img src={Instagram} alt=''/>

          </a>

        </div>
      </div>
      <div className="i-right">
        
        <img src={mypic1} alt=""/>
        <motion.img 
        initial={{left:'-56%'}}
        whileInView= {{left:'-24%'}}
        transition={transition}
        src={glassesimoji} alt=""/>

        <motion.div
        initial={{top: '-4%', left:'80%'}}
        whileInView= {{left:'60%'}}
        transition={transition}
        style={{left: '60%', top: '-2%'}}
        className='floating-div'>
        
          <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>

    </div>  
    )
}
export default Intro