import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '../../Image/639d56af84d8d43fbc73f642_product-03.jpg';
import Yo from '../../Part/Utility/Axios';

import { useEffect,useState, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

       

const HeroPage_1 = () => {
       const poster= useRef(null);
       
      
  
  useEffect(() => {
  const tl = gsap.timeline();

  gsap.from(".poster", {
  //  y:"100vw",
    duration: "9",
    ease: "power3.out",
  });
}, []);
  useEffect(() => {
    try {
      Yo.get("/api/posters")
    } catch (error) {
      
    }
  

}, []);
  
  
  
  
  
  
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      
    className="w-screen h-full centre flex- bg-gray-100">
     
      {
        [12,4,6].map((element,index)=>(
        
       <SwiperSlide key={index} className="w-full relative h-full">
         
         <div className=" poster  fixed  top-40 rotate-90 -left-3 text-black z-40">
           <h2 className="text-xl font-medium">ULTRA WATERPROOF</h2>
           <h1 className="text-2xl font-bold">AXOLO R-SKIN©</h1>
         </div>
         
        <img className="object-cover" src={img} />
      </SwiperSlide>
        ))
      }


      
 
 
 
 
 
 
          </Swiper>
          
    </div>
  )
}

export default HeroPage_1