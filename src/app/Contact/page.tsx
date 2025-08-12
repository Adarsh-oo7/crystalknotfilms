import ContactForm from '@/components/common/ContactForm'
import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div>
          <div className="hidden lg:flex bg-white h-5 items-center justify-around px-4">
      {/* Gmail */}
      <Link
        href="mailto:yourmail@gmail.com"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          alt="Gmail"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">Gmail</span>
      </Link>

      {/* WhatsApp with Number */}
      <Link
        href="https://wa.me/918310881045"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">+91 98765 43210</span>
      </Link>

      {/* Instagram */}
      <Link
        href="https://www.instagram.com/crystalknotfilms/"
        target="_blank"
        className="flex items-center space-x-1 hover:underline"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="w-4 h-4"
        />
        <span className="text-black text-sm">Instagram</span>
      </Link>


    </div>

    <div className='pt-20 bg-[#f5f5f5]'>

        <ContactForm/>
    </div>
    </div>

  )
}

export default page