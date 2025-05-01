import img from
"../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg"


import React, {
  useRef,
  useState,
  forwardRef
} from "react";
import gsap from "gsap";





const CardItem = forwardRef(({
  className,onClick
}, ref) => {
  
  
  
  
  const deleteButtonRef = useRef(null);
  const itemRef = useRef(null);

  const handleButton = (event)=> {
    event.stopPropagation();
    gsap.to(deleteButtonRef.current, {
      width: "40vw",
      duration: 0.5,
      ease: "power4.inOut",
    });
  }
  const handleDeleteItem = (event)=> {
    event.stopPropagation();
    gsap.to(ref.current, {
      x:"100vw",
      display: 'none',
      duration: 1,
      ease: "power4.inOut",
    });
  }
  
  
  const closeDeleteButton = (event)=> {
    //event.stopPropagation();
    gsap.to(deleteButtonRef.current, {
      width: "0vw",
      duration: 0.5,
      ease: "power4.inOut",
    });
  }



  return (
    <div ref={itemRef} onClick={(e)=>closeDeleteButton(e)} className="w-full  ">
      <div className="flex w-full border-y  h-56  flex-row">
        <div className="w-[45%]  h-full">
          <img src={img} />
      </div>

      <div className=" flex-1 flex flex-col gap-4  h-full p-4">
        <div>

          <h1 className="text-3xl font-medium">VOLA</h1>

          <div className="text-xs leading-tight px-1">
            <h4 className="jstart gap-2 flex-row">
              <div className="bg-green-700 rounded-full w-3  h-3">

              </div>
              Vret Arctic
            </h4>
            <h4 className="jstart gap-2 flex-row">
              <div className=" rounded-full w-3  h-3">

              </div>
              Size : 37
            </h4>



          </div>
        </div>

        {/*    button */}

        <div className="jstart text-sm h-10 w-full">
          <div className="centre  w-10 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              width="18" height="18" fill="none" stroke="currentColor"
              stroke-width="3">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <div className="centre border border-gray-200 w-10 h-full">
            1
          </div>
          <div className="centre   w-10 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              width="18" height="18" fill="none" stroke="currentColor"
              stroke-width="3">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>

          </div>

        </div>


        {/*    button close */}


        <h1 className="text-4xl font-light ">129€</h1>



      </div>
    </div>

    <div onClick={handleButton} className="w-full flex flex-row centre  h-16">
      <button className="full font-medium text-black">DELETE</button>
      <div ref={deleteButtonRef} onClick={onClick} className="h-full w-[0vw]  centre  bg-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>

  </div>
)
});

export default CardItem