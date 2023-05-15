import React,{ useContext } from "react";
import { themeContext } from "../../Context";
import './Education.css';
const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return(
    <main>
      <section class="education" id='Education' >
        <div class="heading" style={{color: darkMode ? "white" : ""}}> My <span>Education</span></div>
        <div className='box-container' >
          <div class=" box " >
              <i class="fa-solid fa-graduation-cap" style={{color: darkMode ? "white" : ""}}></i>
              <span style={{color: darkMode ? "white" : ""}}>Bachelor of Technology</span>
              <span >Batch: 2016-2020<br/>
              Computer Science Engineering<br/>
              APJ Abdul Kalam Technological
              University, Kerala, India
              </span>
            </div>
          
          <div class=" box ">
          <i class="fa-solid fa-graduation-cap" style={{color: darkMode ? "white" : ""}}></i>
            <span style={{color: darkMode ? "white" : ""}}>Higher Secondary Education</span>
            <span>Batch: 2014-2016<br/>Kerala HSC</span>
          </div>
          <div class=" box ">
          <i class="fa-solid fa-graduation-cap"  style={{color: darkMode ? "white" : ""}}></i>
            <span style={{color: darkMode ? "white" : ""}}>Secondary Education</span>
            <span >Batch: 2013-2014
            <br/>Kerala SSC</span> 
          </div>
        </div>
        
      </section>
    </main>
  )
}
export default Education