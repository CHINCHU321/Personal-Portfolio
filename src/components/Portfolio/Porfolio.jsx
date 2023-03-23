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
import { Autoplay} from "swiper";

export default function App() {
  return (
   <>
    <div className="portfolio">
    <span >Recent Projects</span>
      
      <span>Portfolio</span>
    <Swiper
        className="portfolio-slider"
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
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