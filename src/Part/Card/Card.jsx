import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect
} from "react";
import gsap from "gsap";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode,Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode'; //Card.jsx






import CardItem from './CardItem';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';


////img
import img from
"../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg"

const Card = forwardRef(({
  className
}, ref) => {
  
const swiperRef = useRef(null);
  const [slides, setSlides] = useState([1, 2, 3, 4, 5]);

  const cardRef = useRef(null);
  const cardItemRefs = useRef([]);

  
  useEffect(() => {
    cardItemRefs.current = slides.map((_, i) => cardItemRefs.current[i] ?? React.createRef());
  }, [slides]);


const handleDeleteItem = (index) => (event) => {
    event.stopPropagation();
    const targetRef = cardItemRefs.current[index];

    gsap.to(targetRef.current, {
      x: "100vw",
      duration: 0.8,
      ease: "power4.inOut",
      onComplete: () => {
        setSlides((prev) => prev.filter((_, i) => i !== index));
        
        swiperRef.current?.slideToLoop(0); // optional
      }
    });
  };






  useImperativeHandle(ref, () => ({
    openCard: () => {
      gsap.to(cardRef.current, {
        //opacity: 1,
        x: 0,
        display: "flex",
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
    closeCard: () => {
      gsap.to(cardRef.current, {
        //  opacity: 0,
        display: "none",
        x: "100vw",
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
  }));





  return (
    <>
      <div
        ref={cardRef} style={ { display: "none", }}
        className={`translate-x-[100vw] border-t-2 relative z-[40] bg-white  w-screen h-[calc(100vh-5rem)]
        jstart flex-col ${className}`}
        >

       
      <CardHeader />
        {/*   
<div className="w-full flex-1 h-[calc(100vh-5rem-18.5vw) h-full overflow-scroll ">
  

        {
        [12,].map((element,index)=>(
        
        
      <CardItem key={index} />
      
      
      

        ))
      }

</div>
        
        */}



<Swiper  modules={[Navigation, Pagination, Scrollbar, A11y,FreeMode]}
      direction="vertical"
      spaceBetween={0}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1.13}
     // navigation
      freeMode={true}
      
      pagination={{ clickable: true }}
      
       className="w-full flex-1
      h-[calc(100vh-5rem-18.5vw)] h-fullq overflow-scroll ">
  

        {
        slides.map((element,index)=>(
        
       <SwiperSlide ref={cardItemRefs.current[index]} key={index}>
              <CardItem onClick={handleDeleteItem(index)} />
          </SwiperSlide>
      
      
      

        ))
      }

</Swiper>








<CardFooter />




    </div>
  </>
)
});

export default Card