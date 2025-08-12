import ClientVideoSection from '@/components/Home/ClientVideoSection'
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
        href="https://wa.me/919876543210"
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
        href="https://instagram.com/yourusername"
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
            <section className="bg-[#1E1E1E] pt-20 pb-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] mt-15 text-white mb-8" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.08em', lineHeight: 1.4, }}>OUR WORKS</h2>
                    <p className="text-white  mb-6 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Professional wedding video editing can make all the difference in the world, taking subpar footage and turning it to something.
                    </p>
                    <p className="text-white mb-6 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        We specialise in wedding video editing and post-production. Whatever the style and the tone your clients are looking for, we can lend a helping hand, saving you a lot of time and giving you a stellar video.
                    </p>
                    <p className="text-white mb-6 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Over the years, we have partnered up with numerous videographers and wedding video studios. We’ve worked on simple and traditional projects and we’ve also carried out some pretty ambitious edits.
                    </p>
                    <p className="text-white text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                        Check our samples below and let us know how we can help you.
                    </p>
                </div>
            </section>
            <section className="flex bg-[#111] items-center justify-center min-h-screen">
                <ClientVideoSection />
            </section>

        </div>
    )
}

export default page