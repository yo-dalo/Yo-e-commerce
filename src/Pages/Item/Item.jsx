import React from 'react'
import { useEffect, useState } from 'react';


import ItemPage_1 from './ItemPage_1'
import ItemPage_2 from './ItemPage_2'
import ItemPage_3 from './ItemPage_3'

import {useUtility} from "../../Context/UtilityContext"


const Item = () => {
  const {getYoData,yoData} = useUtility()
  const [item, setItem] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [availableSizes, setAvailableSizes] = useState([]);
  const [availableColors, setAvailableColors] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);




  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
      getYoData("item","../../../src/TestData/ItemData.json")
  }, []);
  
  
  
  useEffect(() => {
    setItem(yoData?.item)
  }, [yoData?.item]);
  useEffect(() => {
    
       const colors = [...new Set(item?.variants.map(v => v.color))];
       const sizes = [...new Set(item?.variants.map(v => v.size))];
       
    setAvailableColors(colors);
    setAvailableSizes(sizes);
  
  }, [item]);
  
  
  
  return (
   
   <div class="font-[Inter] ani_1 relative z-[10]">
     <ItemPage_1  colors={availableColors}  sizes={availableSizes} data={yoData?.item}  />
     <ItemPage_2  />
     <ItemPage_3 />
     
    </div>
   
   
  )
}

export default Item