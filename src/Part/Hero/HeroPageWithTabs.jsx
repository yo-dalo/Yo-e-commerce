import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import HeroCardSwiper from "../../Part/Hero/HeroCard/HeroCardSwiper";
import { useUtility } from "../../Context/UtilityContext";

const HeroPageWithTabs = ({
  option1,
  option2,
  data,
  onClick1,
  onClick2,
  imgClassName = "",
  infoClassName = "",
  spaceBetween = 10,
  slidesPerView = 1.2,
  isLoading
}) => {
  const { isPhone } = useUtility();
  
  return (
    <div className={`w-screen ${onClick1 ? 'mb-12' : ''} centre   flex-col gap-3 default_padding`}>
      <div className="flex text-xl flex-row overflow-scroll w-full">
        <button 
          onClick={onClick1} 
          className="text-black py-4 border-b-2 border-black centre  min-w-[50%] w-1/2 dark:text-gray-100"
        >
          {option1}
        </button>
        <button 
          onClick={onClick2} 
          className="text-gray-400 py-4 border-b-2 border-gray-400 centre w-1/2"
        >
          {option2}
        </button>
      </div>
      <HeroCardSwiper 
        data={data} 
        imgClassName={imgClassName} 
        infoClassName={infoClassName} 
        spaceBetween={spaceBetween} 
        slidesPerView={slidesPerView} 
        isLoading={isLoading}
      />
    </div>
  );
};

export default HeroPageWithTabs;