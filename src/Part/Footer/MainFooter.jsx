import React from 'react'

const MainFooter = () => {
  return (
    <div className="w-screen  pb-10 relative z-[10]   flex flex-col gap-10 px-5 bg-white  w-full  text-black">
   <table className="w-full  mainFooter">
     <tr className="w-full">
       <td className="w-1/2 ">website</td>
       <td className="w-1/2">website</td>
     </tr>
     <tr className="w-full">
       <td className="w-1/2 ">website</td>
       <td className="w-1/2">website</td>
     </tr>
     <tr className="w-full">
       <td className="w-1/2 ">website</td>
       <td className="w-1/2">website</td>
     </tr>
     
   </table>
      
      <div className="centre h-11 w-full flex-row bg-gray-200 rounded gap-1">
        
        <h3 className="text-sm font-extralight">Next Category</h3>
        
        <div className="font-bold text-lg ">5</div>
        <div className="font-bold text-sm ">Bring the kids are</div>
        
        
      </div>
      
      
      <div className="w-full overflow-hidden">
          <div className="flex whitespace-nowrap flex-row">
            ......................................................................................
         </div>
         
         <div className="w-72 ">
           <table>
             <tr>
               <td className="px-2 text-sm font-light " >Cookies Privacy</td>
               <td className="px-2 text-sm font-light " >Legal terms </td>
               <td className=" px-2 text-sm font-light " >Privacy Policy</td>
             </tr>
             <tr className="">
               <td className="px-2 text-sm font-semibold " >Contact:</td>
               <td className="px-2 text-sm font-light " >Instagram </td>
               <td className=" px-2 text-sm font-light " >Tik Tok</td>
               
               <td className=" px-2 text-sm font-light " >YouTube</td>
             </tr>
             
             
             
           </table>

           
         </div>
         
         
         
        
      </div>
      
      
      
      
      
    </div>
  )
}

export default MainFooter