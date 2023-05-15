import React,{ useContext } from "react";
import { themeContext } from "../../Context";
import Toggle from "../Toggle/Toggle";
import'./Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () =>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <div className="n-wrapper" style={{background: darkMode? "rgb(18, 17, 17)" : "white"}}>
          <div className="n-left">
            <div className="n-name" style={{color: darkMode ? "white" : ""}}>Chinchu</div>
            <Toggle/>
          </div>
            
          <div className="n-right"  >
            <div className="n-list" >
              <ul style={{listStyleType:'none'}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                  <li style={{color: darkMode ? "white" : ""}}>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                <li style={{color: darkMode ? "white" : ""}}>Services</li>
                </Link>
                <Link spy={true} to='Education' smooth={true} >
                <li style={{color: darkMode ? "white" : ""}}>Education</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} >
                <li style={{color: darkMode ? "white" : ""}}>Portfolio</li>
                </Link>
                
              </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} >
               <button className="button n-button">Contact</button>
            </Link>

          </div>

    </div>
  )
}
export default Navbar