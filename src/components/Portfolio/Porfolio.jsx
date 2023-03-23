import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "./Portfolio.css";

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
export default function App() {
  return (
   <>
    <div className="portfolio">
    <span >Recent Projects</span>
      
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
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide> 
        <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={HOC} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>
      
    </>
  );
}