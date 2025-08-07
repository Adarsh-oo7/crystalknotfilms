import ClientVideoSection from '@/components/Home/ClientVideoSection'
import React from 'react'

function page() {
    return (
        <div>
            <section className="bg-[#1E1E1E] py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mt-15 text-white mb-8">OUR WORKS</h2>
                    <p className="text-white  mb-6">
                        Professional wedding video editing can make all the difference in the world, taking subpar footage and turning it to something.
                    </p>
                    <p className="text-white mb-6">
                        We specialise in wedding video editing and post-production. Whatever the style and the tone your clients are looking for, we can lend a helping hand, saving you a lot of time and giving you a stellar video.
                    </p>
                    <p className="text-white mb-6">
                        Over the years, we have partnered up with numerous videographers and wedding video studios. We’ve worked on simple and traditional projects and we’ve also carried out some pretty ambitious edits.
                    </p>
                    <p className="text-white">
                        Check our samples below and let us know how we can help you.
                    </p>
                </div>
            </section>
            <ClientVideoSection />
        </div>
    )
}

export default page