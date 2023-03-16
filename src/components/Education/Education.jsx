import React from 'react';
import './Education.css';
const Education = () => {
  return(
    <main>
      <section class="education">
        <div class="heading"> My <span>Education</span></div>
        <div className='box-container'>
          <div class="box">
              <i class="fa-solid fa-graduation-cap">..................</i>
              <span>Bachelor of Technology</span>
              <span>Batch: 2016-2020</span>
              <span>Computer Science Engineering</span>
              <span>APJ Abdul Kalam Technological</span>
              <span>University, Kerala, India</span>
            </div>
          
          <div class="box">
          <i class="fa-solid fa-graduation-cap">...................</i>
            <span>Higher Secondary Education</span>
            <span>Batch: 2014-2016</span>
            <span>Kerala HSC</span>
          </div>
          <div class="box">
          <i class="fa-solid fa-graduation-cap">...................</i>
            <span>Secondary Education</span>
            <span>Batch: 2013-2014</span>
            <span>Kerala SSC</span> 
          </div>
        </div>
        
      </section>
    </main>
  )
}
export default Education