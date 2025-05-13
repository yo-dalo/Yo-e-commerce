import React,{useState}from 'react'

const HeroCardInfo = ({className}) => {
  
const [info , setInfo] = useState({
  name:"VALA VERT-ARCTIC",
  category:"Recycled wool",
  price:"129.00 €"
})


  return (
     <div  className={`w-full flex flex-col p-3 ${className}`}>
          <h1 className="font-semibold">VALA VERT-ARCTIC</h1>
          <h3 className="text-sm text-gray-300">Recycled wool</h3>
          <h2 className="font-semibold">129.00 €</h2>
        </div>
  )
}

export default HeroCardInfo