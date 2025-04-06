import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";

const SubMenu = forwardRef(({
  className
}, ref) => {
  const SubMenuRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openSubMenu: () => {
      gsap.to(SubMenuRef.current, {
        //opacity: 1, 
        //x: 1, 
        scale:1,
        display: "flex", 
        duration: 0.5, 
        ease: "power4.inOut"
      });
    },
    closeSubMenu: () => {
      gsap.to(SubMenuRef.current, {
      //  opacity: 0, 
        display: "none",
       // x: "100vw",
        scale:0,
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
    }));

  return (
    <>
     
    <div
      ref={SubMenuRef} style={{display:"none",}}
      className={`px-11 border-t-2 scale-0 relative z-[50] translate-x-[100vw]1  bg-white py-14 w-screen h-[calc(100vh-5rem)] flex flex-col gap-9 ${className}`}
      >
      
      <ManuItems text="WOMEN" />
      <ManuItems text="MEN" />
      <ManuItems text="KIDS" />
    </div>
  </>
);
});

export default SubMenu;