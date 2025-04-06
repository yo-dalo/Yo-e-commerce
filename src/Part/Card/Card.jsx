import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";

import CardItem from './CardItem';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';


////img
import img from
"../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg"

const Card = forwardRef(({
  className
}, ref) => {


  const cardRef = useRef(null);


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
        
<div className="w-full flex-1 h-[calc(100vh-5rem-18.5vw) h-full overflow-scroll ">
  

      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />

</div>

<CardFooter />




    </div>
  </>
)
});

export default Card