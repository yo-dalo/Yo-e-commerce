import React from 'react'
import HeroPage_1 from './HeroPage_1.jsx'
import HeroPage_2 from './HeroPage_2.jsx'
import HeroPage_2a from './HeroPage_2a.jsx'
import HeroPage_3 from './HeroPage_3.jsx'

const Hero = () => {
  return (
    <div class="font-[Inter] dark:bg-gray-900 bg-white relative z-[10]">
      <HeroPage_1 />
      <HeroPage_2 option1="Tarending"  option2="---------------" />
      <HeroPage_2a option1="Bast saller"  option2="Mast Recnt" />
      <HeroPage_2a option1="dulex"  option2="Coming Soon" />
      <HeroPage_3 />
    </div>
  )
}

export default Hero