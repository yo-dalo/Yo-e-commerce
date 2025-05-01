import React from 'react'
import HeroCard  from '../../Part/Hero/HeroCard/HeroCard.jsx'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode,Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; //

import {
  Link,
  Outlet
} from "react-router-dom";

import img_1 from "../../Image/639d570f8005921e5deb1f04_product-01 (1).jpg"
import img_2 from "../../Image/639d56af84d8d43fbc73f642_product-03.jpg"


const HeroPage_2 = () => {
  return (
   <div className="w-screen h-screen bg-white  centre flex-col gap-3
   default_padding ">
      
      <div className="flex text-xl flex-row w-full">
             
       <h1 className=" text-black py-4 border-b-2 border-black centre w-1/2 dark:text-gray-100 ">Women</h1>
       
       <h1 className=" text-gray-400 py-4 border-b-2 border-gray-400 centre
       w-1/2">Men</h1>
       
       
      </div>
      
<Swiper modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1.2}
      navigation
      freeMode={true}
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)} className="w-full gap-4 flex overflow-scroll">
        {
        [12,4,6,5,6,7,8,9].map((element,index)=>(
        <SwiperSlide>
          <HeroCard key={element} img={img_1} />
        </SwiperSlide>

        ))
      }
  </Swiper>
      
    </div>
  )
}

export default HeroPage_2