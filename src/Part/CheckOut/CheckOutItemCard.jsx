import React from 'react'
import img from
'../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'
const CheckOutItemCard = () => {
  return (
         <div className="flex gap-4 py-4 flex-col w-full">






{
  [1,2,3].map((element,index)=>(
          <div key={index} className="w-full flex glex-row justify-between  items-center h-20 ">

            <div className="flex glex-row gap-2 items-center h-full">
              <div className="h-full rounded-xl w-16">
                <img className="overflow-hidden rounded-xl" src={img} />
            </div>

            <div className="text-xs font-normal ">
              <h3 className="text-black ">vola-femme</h3>
              <h4 className="text-gray-500">Vert Arctic / 38</h4>
            </div>
          </div>

          <h2 className="text-sm text-black font-normal ">
            138 €
          </h2>


        </div>
  
  ))
}


          



        <div className="jb w-full gap-2 h-12">

          <div className="flex-1 h-full">
            <input className="border-2 rounded-lg px-3" placeholder="enter coupon code " />
        </div>

        <div className="w-16 h-full centre text-sm  rounded-lg border-2">
          valider
        </div>
      </div>



      <div className="w-full flex flex-col gap-2">
        <div className="jb">
          <h2 className=""> Sous-total</h2>
          <h2 className=""> 238 €</h2>

        </div>
        <div className="jb">
          <h2 className=""> Expédition</h2>
          <h2 className="text-sm text-gray-500"> Saisir une adresse d’expédition</h2>

        </div>
        <div className="flex flex-row justify-between items-start  mt-4">
          <div className="">

            <h2 className="text-xl font-bold ">
              Total
            </h2>
            <h2 className="text-sm text-gray-500 font-normal ">
              Taxes de 43,00 € incluses
            </h2>
          </div>


          <h2 className="text-xl font-bold "> 238 €</h2>

        </div>
        
        <div className="centre mt-7 rounded-lg bg-green-900 text-sm font-bold
        text-white  py-4"> 
        Payment 
        </div>

      </div>







    </div>
  )
}

export default CheckOutItemCard