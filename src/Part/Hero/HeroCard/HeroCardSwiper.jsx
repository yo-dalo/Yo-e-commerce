
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode,Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; //

import img_1 from "../../../Image/639d570f8005921e5deb1f04_product-01 (1).jpg"
import img_2 from "../../../Image/639d56af84d8d43fbc73f642_product-03.jpg"
import {useUtility} from "../../../Context/UtilityContext"
import HeroCard from "./HeroCard"



const HeroCardSwiper = () => {
  
  const {isPhone} = useUtility()
  
  
  return (
   <Swiper modules={[Navigation,FreeMode, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1.2}
      navigation={!isPhone?.isPhone}
      freeMode={true}
     /* pagination={{ clickable: true }}*/
      pagination={!isPhone.isPhone}
      
      onSwiper={(swiper) => console.log(swiper)} className="w-full gap-4 flex overflow-scroll">
        {
        [12,4,6,5,6,7,8,9].map((element,index)=>(
        <SwiperSlide>
          <HeroCard key={element} img={img_1} />
        </SwiperSlide>

        ))
      }
  </Swiper>
  )
}

export default HeroCardSwiper