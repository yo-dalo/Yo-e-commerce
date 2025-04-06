import React from 'react'

const HeroCardImg = ({img}) => {
  return (
     <div className="bg-blue-300 w-full  h-[60vh]">  
              <img className="w-full h-full object-cover" src={img} />
              </div>
  )
}

export default HeroCardImg