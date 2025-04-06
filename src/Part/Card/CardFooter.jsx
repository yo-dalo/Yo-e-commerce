import React from 'react'

const CardFooter = () => {
  return (
    <div className="fixed1 w-full  bottom-24 md:bottom-0 left-0 h-[40vw]1 bg-blue-50">
      <div className="px-2">
              <div className="flex flex-row justify-between px-5 items-center py-3">
                <h1 className="font-semibold text-[1.4rem]">TOTAL</h1>
                <h1 className="text-[1.4rem] font-light">255.00€</h1>
              </div>
              <div className="border py-4 centre border-black text-sm">
             Continue shopping 
              </div>
      </div>
      
      <div className="w-full mt-2 font-semibold text-white  h-20 centre bg-gray-900"> Order</div>
      
    </div>
  )
}

export default CardFooter