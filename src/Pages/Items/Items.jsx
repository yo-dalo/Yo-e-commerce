import React from 'react'
import ItemsItem from '../../Part/Items/ItemsItem'
import img from '../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'
import img1 from '../../Image/639d56af84d8d43fbc73f642_product-03.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode,Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; //Card.jsx


const Items = () => {
  return (
    <>
      {/*
    <div className="page columns-2  bg-white gap-1.5 ">
     
            {
        [12,4,6,12,4,6,12,4,6,12,4,6].map((element,index)=>(
       
     <ItemsItem key={index} img={img} />

        ))
      }
     
      
    </div>
      
      */}
    
<Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
  direction="vertical"
  spaceBetween={2}
  slidesPerView={10}
  navigation
  freeMode
  className="h-[600px] bg-white"
>
  {[12, 4, 6, 12, 4, 6, 12, 4, 6, 12, 4, 6].map((element, index) => (
    <SwiperSlide key={index}>
      <ItemsItem img={img} />
    </SwiperSlide>
  ))}
</Swiper>

    </>
  )
}

export default Items