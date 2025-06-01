import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
  useMemo,
} from "react";
import gsap from "gsap";
import ManuItems from "./ManuItems";
import SubMenu from "./SubMenu";
import { useUtility } from '../../Context/UtilityContext';

const Menu = forwardRef(({ className }, ref) => {
  const menuRef = useRef(null);
  const subMenuRef = useRef(null);
  const { yoData } = useUtility();
  const [activeSubMenuId, setActiveSubMenuId] = useState(null);

  useImperativeHandle(ref, () => ({
    openMenu: () => {
      gsap.to(menuRef.current, {
        y: 0,
        display: "flex",
        duration: 1,
        ease: "power4.inOut"
      });
    },
    closeMenu: () => {
      gsap.to(menuRef.current, {
        display: "none",
        y: "100vh",
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          // Reset submenu when closing main menu
          setActiveSubMenuId(null);
          subMenuRef.current?.closeSubMenu();
        }
      });
    },
  }));

  const toggleSubMenu = (id) => {
    if (activeSubMenuId === id) {
      // Close if clicking the same item
      subMenuRef.current?.closeSubMenu();
      setActiveSubMenuId(null);
    } else {
      // Open new submenu
      subMenuRef.current?.openSubMenu(id);
      setActiveSubMenuId(id);
    }
  };

  const menuItems = useMemo(() => (
    yoData?.categories?.map((element) => (
      <ManuItems 
        key={element?.id} 
        onClick={() => toggleSubMenu(element.id)} 
        text={element?.name}
        isActive={activeSubMenuId === element.id}
      />
    ))
  ), [yoData?.categories, activeSubMenuId]);

  return (
    <div
      ref={menuRef}
      style={{ display: "none" }}
      className={`px-11 bg-white border-t-2 fixed z-40 py-14 w-screen h-[calc(100vh-5rem)] flex flex-col gap-9 ${className}`}
    >
      {menuItems}
      <SubMenu 
        ref={subMenuRef}  
        closeButton={() => {
          setActiveSubMenuId(null);
          subMenuRef.current?.closeSubMenu();
        }}  
      />
    </div>
  );
});

export default Menu;