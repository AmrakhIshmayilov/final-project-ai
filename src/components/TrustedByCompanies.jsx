import React from 'react'
import Company from './Company'
// import { Swiper, SwiperSlide, AutoPlay } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import shirket1 from '../assets/images/companies/partner-1.svg'
import shirket2 from '../assets/images/companies/partner-2.svg'
import shirket3 from '../assets/images/companies/partner-3.svg'
import shirket4 from '../assets/images/companies/partner-4.svg'


const TrustedByCompanies = () => {
  return (

<>
<div className='companies mt-5 mx-auto '>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
    
  
       <SwiperSlide> <Company shekil={shirket1}/></SwiperSlide>    
       <SwiperSlide> <Company shekil={shirket2}/></SwiperSlide>      
       <SwiperSlide> <Company shekil={shirket3}/></SwiperSlide>    
       <SwiperSlide> <Company shekil={shirket4}/></SwiperSlide> 
       
       <SwiperSlide> <Company shekil={shirket1}/></SwiperSlide>    
       <SwiperSlide> <Company shekil={shirket2}/></SwiperSlide>      
       <SwiperSlide> <Company shekil={shirket3}/></SwiperSlide>    
       <SwiperSlide> <Company shekil={shirket4}/></SwiperSlide>    
   
    </Swiper>
    </div>
    </>

    )
}

export default TrustedByCompanies