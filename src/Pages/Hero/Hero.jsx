import React from 'react'
import HeroPage_1 from './HeroPage_1.jsx'
import HeroPage_2 from './HeroPage_2.jsx'
import HeroPage_3 from './HeroPage_3.jsx'

const Hero = () => {
  return (
    <div class="font-[Inter]  relative z-[10]">
      <HeroPage_1 />
      <HeroPage_2 />
      <HeroPage_3 />
    </div>
  )
}

export default Hero