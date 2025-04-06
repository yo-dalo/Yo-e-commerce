import React from 'react'
import ItemImages from '../../Part/Item/ItemPage_1/ItemImages'
import ItemInfo from '../../Part/Item/ItemPage_1/ItemInfo'
import ItemColor from '../../Part/Item/ItemPage_1/ItemColor'
import ItemSize from '../../Part/Item/ItemPage_1/ItemSize'
import ItemAddToCard from '../../Part/Item/ItemPage_1/ItemAddToCard'




const ItemPage_1 = () => {
  return (
    <div className="w-screen min-h-screen h-screen1 text-white min-h-screen
    bg-gray-50 page pb-7">
      
        <ItemImages />
        
        <div className="w-full default_padding ">
        <ItemInfo />
        <ItemColor />
        <ItemSize />
        <ItemAddToCard />
      
        </div>
      
      
      
      
    </div>
  )
}

export default ItemPage_1