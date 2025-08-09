'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function Story() {
    return (
        <main className="relative  mt-[100vh] bg-[#f5f5f5]">

            <main className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f5] py-12 px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1
                        className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-normal mb-4 text-gray-800"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>
                        WEDDING VIDEO EDITING SERVICES

                    </h1>


                    <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal mb-12 text-gray-700" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>
                        &quot;For videographers, photographers, and couples who want their footage transformed into timeless, cinematic films.&quot;
                    </p>

                    {/* New container for Foundering Story and Image */}
                    <div className="flex flex-col md:flex-row items-start gap-26 max-w-7xl px-0 md:px-0 mx-auto mt-12 justify-between">
                        {/* TEXT CONTAINER */}
                        <div className="bg-white p-5 md:p-10 pr-2 md:pr-5 shadow-sm w-full md:w-[100%] text-start ">
                            <h2
                                className="text-xl md:text-2xl font-normal tracking-wide mb-6 text-gray-800 text-center md:text-left"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    letterSpacing: '0.1em',
                                    lineHeight: 1.4,
                                }}
                            >
                                FOUNDERING STORY
                            </h2>
                            <p
                                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed mb-6 text-gray-700"
                                style={{ fontFamily: 'Quicksand, sans-serif' }}
                            >
                                &quot;Working with other big brands in the Video editing industry for almost 8 years, I realized that Almost editors was after one thing - to cover as many weddings and make as much money as possible.
                                There was no character in the wedding Films, Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it’s almost 2025! Your iPhones can do that!
                                And no one even tried to change that. That killed me as an artist. In 2020,

                            </p>
                            <p
                                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-gray-700"
                                style={{ fontFamily: 'Quicksand, sans-serif' }}
                            >
                                I decided to start Crystal Knot Films — a place where edits aren’t rushed, stories aren’t recycled, and every timeline is built with care, coffee, and just the right amount of drama.
                                Today, we create wedding films that don’t just look good — they feel right.
                                Real stories. Real emotion. Zero copy-paste vibes.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full md:w-[70%] mt-0 sm:mb-10 sm:mt-0 md:mt-35 lg:mt-30 pl-2 md:pl-10 flex justify-end">


                            <Image
                                src="./images/Without background.png"
                                alt="Wedding Videography Equipment"
                                width={800}
                                height={600}
                                className="w-[50%] lg:w-[100%] md:w-[100%] sm:w-[50%] mx-auto sm:mx-auto md:mx-auto h-auto object-cover rounded-lg"
                            />

                        </div>

                    </div>


<div className='relative z-10'>
                    <div className="mt-12 ">
                        <Link href={"/Portfolio"} >
                        <button className=" bg-black text-white px-2 py-3 rounded-lg md:px-3 lg:px-7 lg:py-4 text-lg hover:bg-gray-800 transition-colors duration-200" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            Browse our Portfolio
                        </button>
                        </Link>

                    </div>
</div>



                </div>
            </main>
        </main>

    )
}
