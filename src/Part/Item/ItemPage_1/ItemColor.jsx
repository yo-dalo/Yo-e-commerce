import React from 'react'

const ItemColor = () => {
  return (
    <div className="w-full font-semibold   flex flex-col
    gap-1 text-black py-2  bg-white">
      <h3 className="text-xl ">Classes</h3>
      
      <div className="jstart gap-2 flex-row">
        {
          ["green", "blue","pink","#a7d5b0"].map((element,index)=>(
          
      <div key={index} className="rounded-full border border-black p-[3px]  w-5 h-5 ">
        <div style={{ backgroundColor: element,}} className="full bg-green-950 rounded-full">
        </div>
        
      </div> 
      
              )
          )
        }
        
      </div>
      
      
     
    </div>
  )
}

export default ItemColor