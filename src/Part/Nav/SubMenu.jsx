import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";

const SubMenu = forwardRef(({
  className,onClick
}, ref) => {
  const subMenuRef = useRef(null);
  
   
  
  
  

  useImperativeHandle(ref, () => ({
    openSubMenu: () => {
      gsap.to(subMenuRef.current, {
        //opacity: 1, 
        x: 1, 
     //   scale:1,
        display: "flex", 
        duration: 0.5, 
        ease: "power4.inOut"
      });
    },
    closeSubMenu: () => {
      gsap.to(subMenuRef.current, {
      //  opacity: 0, 
        display: "none",
        x: "100vw",
     //   scale:0,
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
    }));

  return (
    <>
     
    <div
      ref={subMenuRef} onClick={onClick} style={{display:"none",}}
      className={`px-11 full absolute top-0 left-0  border-t-2 scale-1
      z-[60] translate-x-[100vw]  bg-white py-14 w-screen1
      h-[calc(100vh-5rem)]1
      flex flex-col gap-9 ${className}`}
      >
      <h1  className="text-2xl font-light text-center">WOMEN</h1>
      
      
      <ManuItems text="WOMEN" />
      <ManuItems text="MEN" />
      <ManuItems text="KIDS" />
    </div>
  </>
);
});

export default SubMenu;