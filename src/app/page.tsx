import About from '@/components/Home/About'
import { Loader } from '../components/common/Loader'
import FluidCursor from '../components/FluidCursor'
import { Hero } from '../components/Home/Hero'
import React from 'react'
import Moments from '@/components/Home/Moments'
import Parallax from '@/components/Home/Parallax'
import HomePortfolio from '@/components/Home/HomePortfolio'

function page() {
  return (
    <div>
      {/* <Loader loadingTime={3000}> */}
      {/* {" "} */}
      {/* The page content will appear after 3 seconds */}
      <FluidCursor/>
      <Hero/>
      <About/>
      <Moments/>
      <Parallax/>
      <HomePortfolio/>
    {/* </Loader> */}
    </div>
  )
}

export default page
