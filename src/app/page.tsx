import { Loader } from '@/components/common/Loader'
import FluidCursor from '@/components/FluidCursor'
import { Hero } from '@/components/Home/Hero'
import ThreeDsection from '@/components/Home/ThreeDsection'
import React from 'react'

function page() {
  return (
    <div>
      <Loader loadingTime={3000}>
      {" "}
      {/* The page content will appear after 3 seconds */}
      <FluidCursor/>
      <Hero/>
      <ThreeDsection/>
    </Loader>
    </div>
  )
}

export default page
