
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";
import SubMenu from "./SubMenu";

const Menu = forwardRef(({
  className
}, ref) => {
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);


  useImperativeHandle(ref, () => ({
    openMenu: () => {
      gsap.to(menuRef.current, {
        //opacity: 1, 
        y: 0, 
        //scale:1,
       // height: "calc(100vh - 5rem)",
        display: "flex", 
        duration: 1.5, 
        ease: "power4.inOut"
      });
    },
    closeMenu: () => {
      gsap.to(menuRef.current, {
      //  opacity: 0, 
        display: "none",
      //  height: "0",
       y: "100vh",
       // scale:0,
        duration: 0.5,
        ease: "power4.inOut"
      });
    },
    
    }));


const toggleSubMenu = () => {
    if (isOpenSubMenu) {
      subMenuRef.current?.openSubMenu();
    
      
    } else {
      subMenuRef.current?.closeSubMenu();
      
    }
    setIsOpenSubMenu(!isOpenSubMenu);
  };



  return (
    <>
     
    <div
      ref={menuRef} style={{display:"none",}}
      className={`px-11 bg-white border-t-2 scale-1 relative z-10  translate-x-[100vw]1 translate-y-[100vh]  bg-white py-14 w-screen h-[calc(100vh-5rem)] flex  flex-col gap-9 ${className}`}
      >
      
      <ManuItems text="MEN" />
      <ManuItems onClick={toggleSubMenu} text="WOMEN" />
      <ManuItems text="KIDS" />
      
     <SubMenu ref={subMenuRef} onClick={toggleSubMenu}  />
   
   
    </div>
  </>
);
});

export default Menu;