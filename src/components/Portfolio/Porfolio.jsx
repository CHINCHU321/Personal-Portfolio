import React,{ useContext } from "react";
import { themeContext } from "../../Context";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import  WIWBank from "../../img/WIWBank.png";
import Ecommerce from "../../img/ecommerce.png";
import portfolioproject from "../../img/portfolioproject.png";
import MusicApp from "../../img/musicapp.png";
import "./Portfolio.css";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        navigation
        pagination={{ clickable: true }} 
        centeredSlides={true}
      >
        <SwiperSlide>
        <a href="https://github.com/CHINCHU321/Wiw-Bank">
          <img src={WIWBank} alt="" />
        </a>
        </SwiperSlide>
        <SwiperSlide> 
        <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://github.com/CHINCHU321/Personal-Portfolio">
        <img src={portfolioproject} alt="" />
        </a>
        </SwiperSlide>
       
      </Swiper>
    </div>
      
    </>
  );
}