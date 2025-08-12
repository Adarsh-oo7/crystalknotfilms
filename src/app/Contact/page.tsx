import ContactForm from '@/components/common/ContactForm'
import React from 'react'
import ContactLinks from "@/components/ContactLinks";

function page() {
  return (
    <div>
<ContactLinks/>

    <div className='pt-20 bg-[#f5f5f5]'>

        <ContactForm/>
    </div>
    </div>

  )
}

export default page