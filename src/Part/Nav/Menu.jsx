import React, {
  forwardRef,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";

const Menu = forwardRef(({
  className
}, ref) => {
  const menuRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openMenu: () => {
      gsap.to(menuRef.current, {
        //opacity: 1, 
        //x: 1, 
        scale:1,
        display: "flex", 
        duration: 0.5, 
        ease: "power4.inOut"
      });
    },
    closeMenu: () => {
      gsap.to(menuRef.current, {
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
      ref={menuRef} style={{display:"none",}}
      className={`px-11 border-t-2 scale-0 relative z-[50] translate-x-[100vw]1  bg-white py-14 w-screen h-[calc(100vh-5rem)] flex flex-col gap-9 ${className}`}
      >
      <ManuItems text="WOMEN" />
      <ManuItems text="MEN" />
      <ManuItems text="KIDS" />
      
    </div>
  </>
);
});

export default Menu;