import React from "react";
import'./Navbar.css';
const Navbar = () =>{
  return(
    <div className="n-wrapper">
          <div className="n-left">
            <div className="n-name">Chinchu</div>
            <span>toggle</span>
          </div>
            
          <div className="n-right">
            <div className="n-list">
              <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Education</li>
                <li>Portfolio</li>
                <li>Testimonial</li>
              </ul>
            </div>
            <button className="button n-button">Contact</button>

          </div>

    </div>
  )
}
export default Navbar