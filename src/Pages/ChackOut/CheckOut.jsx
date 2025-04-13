import React from 'react'

import CheckOutInput from '../../Part/CheckOut/CheckOutInput'
import CheckOutItemCard from '../../Part/CheckOut/CheckOutItemCard'



import CheckOutSectionLayout from '../../Layout/CheckOutSectionLayout'

import img from
'../.../../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg'



const CheckOut = () => {
  return (
    <div className="page bg-white py-20 ">
      <div className="flex default_padding justify-between items-center
        bg-gray-100 border-y h-16 ">
        <h3 className="text-green-900 text-sm">Résumé de la commande </h3>
        <h2 className="text-green-900 text-lg font-semibold ">258,00 €</h2>

      </div>

      <div className="default_padding flex flex-col gap-8 py-8  w-full">



        <CheckOutSectionLayout heading="Contact" subHeading="Ouvrir une session">
          <CheckOutInput />

          <div className=" w-full  gap-1 centre flex">
            <input type="checkbox" />
          <h2 className="min-w-full  text-xs">

            Envoyez-moi les nouvelles et les offres par email et Whatsapp
          </h2>
        </div>



      </CheckOutSectionLayout>

      <CheckOutSectionLayout heading="Livraison" subHeading="">
        <CheckOutInput />
        <CheckOutInput />
        <CheckOutInput />
        <CheckOutInput />
      </CheckOutSectionLayout>
      <CheckOutSectionLayout heading="Livraison" subHeading="">

        <div className="w-full mt-2 font-normal text-gray-500 centre text-sm  py-4 rounded-lg px-3 bg-gray-200 ">
          <h3>Saisissez votre adresse d’expédition pour voir les modes d’expédition disponibles.</h3>
        </div>

      </CheckOutSectionLayout>

      <CheckOutSectionLayout heading="Paiement" subHeading="">
        <h3 className="font-normal text-gray-500"> hai kya ham kisi ko</h3>




      </CheckOutSectionLayout>
      <CheckOutSectionLayout heading="Résumé de la commande" subHeading="">

        <CheckOutItemCard />


  </CheckOutSectionLayout>






</div>





</div>
)
}

export default CheckOut