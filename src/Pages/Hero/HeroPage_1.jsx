import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from '../../Image/639d56af84d8d43fbc73f642_product-03.jpg';




const HeroPage_1 = () => {
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
     
      
       <SwiperSlide className="w-full relative h-full">
         
         <div className="fixed top-40 rotate-90 -left-3 text-black z-40">
           <h2 className="text-xl font-medium">ULTRA WATERPROOF</h2>
           <h1 className="text-2xl font-bold">AXOLO R-SKIN©</h1>
         </div>
         
        <img className="object-cover" src={img} />
      </SwiperSlide>
       <SwiperSlide className="w-full relative h-full">
         
         <div className="fixed top-32 left-14 text-black z-40">
           <h2 className="text-xl font-medium">ULTRA WATERPROOF</h2>
           <h1 className="text-2xl font-bold">AXOLO R-SKIN©</h1>
         </div>
         
        <img className="object-cover" src={img} />
      </SwiperSlide>
       <SwiperSlide className="w-full relative h-full">
         
         <div className="fixed top-32 left-14 text-black z-40">
           <h2 className="text-xl font-medium">ULTRA WATERPROOF</h2>
           <h1 className="text-2xl font-bold">AXOLO R-SKIN©</h1>
         </div>
         
        <img className="object-cover" src={img} />
      </SwiperSlide>
       <SwiperSlide className="w-full relative h-full">
         
         <div className="fixed top-32 left-14 text-black z-40">
           <h2 className="text-xl font-medium">ULTRA WATERPROOF</h2>
           <h1 className="text-2xl font-bold">AXOLO R-SKIN©</h1>
         </div>
         
        <img className="object-cover" src={img} />
      </SwiperSlide>
      
 
 
 
 
 
 
          </Swiper>
          
    </div>
  )
}

export default HeroPage_1