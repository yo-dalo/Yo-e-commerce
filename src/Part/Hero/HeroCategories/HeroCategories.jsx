import React from 'react'

import HeroCategoriesElement from "./HeroCategoriesElement"

const HeroCategories = () => {
  return (
    <div className="w-full ">
      <h1 className="text-2xl text-center"> Your Categories </h1>
   
      
      <div className="grid grid-cols-2 gap-3 gap-y-5 py-10">
      
      
        
        
      
        <HeroCategoriesElement />
        <HeroCategoriesElement />
        <HeroCategoriesElement />
        <HeroCategoriesElement />
      
      
        

        
      </div>
      
      
    </div>
  )
}

export default HeroCategories