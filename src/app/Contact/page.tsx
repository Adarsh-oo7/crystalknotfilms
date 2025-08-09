import ContactForm from '@/components/common/ContactForm'
import VideoBanner from '@/components/common/Video-banner'
import React from 'react'

function page() {
  return (
    <div>
        <VideoBanner
title={
    <>
      Let’s Create Something <br /> Unforgettable Together
    </>
  }        videoSrc='/videos/intro.mp4'/>
        <ContactForm/>
    </div>
  )
}

export default page