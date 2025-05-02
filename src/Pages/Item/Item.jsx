import React from 'react'
import { useEffect, useState } from 'react';


import ItemPage_1 from './ItemPage_1'
import ItemPage_2 from './ItemPage_2'
import ItemPage_3 from './ItemPage_3'



const Item = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
   
   <div class="font-[Inter] ani_1 relative z-[10]">
     <ItemPage_1 />
     <ItemPage_2 />
     <ItemPage_3 />
     
    </div>
   
   
  )
}

export default Item