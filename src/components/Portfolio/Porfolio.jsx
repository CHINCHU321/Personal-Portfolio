import React,{ useContext } from "react";
import { themeContext } from "../../Context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import  WIWBank from "../../img/WIWBank.png";
import HEXAGYM from "../../img/HEXAGYM.png";
import portfolioproject from "../../img/portfolioproject.png";
import Admindashboard from '../../img/Admindashboard.png';
import "./Portfolio.css";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
export default function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <>
    <div className="portfolio" id='Portfolio'>
    <span style={{color: darkMode ? "white" : ""}}>Recent Projects</span>
      
      <span>Portfolio</span>
     <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="portfolio-slider"
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }} 
        centeredSlides={true}
      >
        <SwiperSlide>
          <a href="https://github.com/CHINCHU321/Wiw-Bank">
          <img src={WIWBank} alt="" />
          </a>
          <a href="https://github.com/CHINCHU321/Wiw-Bank" className=" button gbtn">
          Github
          </a>
        </SwiperSlide>
        <SwiperSlide> 
          <a href="https://github.com/CHINCHU321/Admin-dashboard">
          <img src={Admindashboard} alt="" />
          </a>
          <a href="https://github.com/CHINCHU321/Admin-dashboard" className=" button gbtn">
          Github
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/CHINCHU321/Personal-Portfolio">
          <img src={portfolioproject} alt="" />
          </a>
          <a href="https://github.com/CHINCHU321/Personal-Portfolio" className=" button gbtn">
          Github
          </a>
        </SwiperSlide>
        <SwiperSlide> 
          <a href="https://github.com/CHINCHU321/Gym-typescript">
          <img src={HEXAGYM} alt="" />
          </a>
          <a href="https://github.com/CHINCHU321/Gym-typescript" className=" button gbtn">
          Github
          </a>
        </SwiperSlide>
                
      </Swiper>
    </div>
      
    </>
  );
}