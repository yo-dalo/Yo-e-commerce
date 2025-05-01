import React from 'react'
import HeroCardImg from "../../Part/Hero/HeroCard/HeroCardImg"
import HeroCardInfo from "../../Part/Hero/HeroCard/HeroCardInfo"


import {
  Link,
  Outlet
} from "react-router-dom";

const ItemsItem = ({img}) => {
  return (
        <Link to="/item" className="w-full border-y  block break-inside-avoid">
        <HeroCardImg className="h-auto  align-top" img={img} />
        <HeroCardInfo  />

      </Link>
  )
}

export default ItemsItem