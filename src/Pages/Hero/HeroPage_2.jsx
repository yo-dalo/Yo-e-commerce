import React from 'react'
import HeroCard  from '../../Part/Hero/HeroCard/HeroCard.jsx'


import img_1 from "../../Image/639d570f8005921e5deb1f04_product-01 (1).jpg"
import img_2 from "../../Image/639d56af84d8d43fbc73f642_product-03.jpg"


const HeroPage_2 = () => {
  return (
   <div className="w-screen h-screen bg-white  centre flex-col gap-3
   default_padding ">
      
      <div className="flex text-xl flex-row w-full">
       <h1 className=" text-black py-4 border-b-2 border-black centre w-1/2 ">Women</h1>
       <h1 className=" text-gray-400 py-4 border-b-2 border-gray-400 centre w-1/2">Men</h1>
      </div>
      
<div className="w-full gap-4 flex overflow-scroll">
      <HeroCard img={img_1} />
      <HeroCard img={img_2} />
  </div>
      
    </div>
  )
}

export default HeroPage_2