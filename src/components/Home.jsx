import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import ExploreCourse from './ExploreCourse'
import FavouriteCourse from './FavouriteCourse'
import WhyUs from './WhyUs'
import FAQ from './FAQ'
import WhatyouLookingFor from './WhatyouLookingFor'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-[#F5F7FB]'>
      
      <HeroSection/>
      <AboutUs/>
      <ExploreCourse/>
      <FavouriteCourse/>
      <WhyUs/>
      <FAQ/>
      <WhatyouLookingFor/>
     
    </div>
  )
}

export default Home
