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
import {useUtility} from "../../Context/UtilityContext"
import HeroCardSwiper from "../../Part/Hero/HeroCard/HeroCardSwiper.jsx"


const HeroPage_2a = ({option1,option2}) => {
  const {isPhone}=  useUtility();
  
  return (
   <div className=" w-screen mb-12  centre flex-col gap-3
   default_padding ">
      
      <div className="flex text-xl flex-row  overflow-scroll w-full">
             
       <h1 className=" text-black py-4 border-b-2 border-black centre min-w-[50%]  w-1/2 dark:text-gray-100 ">{option1}</h1>

       <h1 className=" text-gray-400 py-4 border-b-2 border-gray-400 centre
       w-1/2">{option2}</h1>
      </div>
      <HeroCardSwiper imgClassName="h-[35.1vh]" infoClassName="text-sm" spaceBetween={5} slidesPerView={2.2} />
    </div>
  )
}

export default HeroPage_2a