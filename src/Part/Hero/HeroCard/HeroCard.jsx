import React from 'react'
import img_1 from '../../../Image/639d56af84d8d43fbc73f642_product-03.jpg'
import img_2 from '../../../Image/639d570f8005921e5deb1f04_product-01 (1).jpg'
import HeroCardImg from './HeroCardImg'
import HeroCardInfo from './HeroCardInfo'


const HeroCard = ({img}) => {
  return (
        <div className="min-w-[80%]">
        <HeroCardImg img={img} />
        <HeroCardInfo  />
      </div>
    
  )
}

export default HeroCard