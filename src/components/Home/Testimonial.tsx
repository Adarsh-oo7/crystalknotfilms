'use client'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Star } from 'lucide-react' // Import the Star icon

export default function TestimonialSection() {
    const testimonials = [
        {
            leftContent: {
                heading: "Client",
                text: "We were heartbroken with our original wedding video—it felt lifeless and didn’t capture our story. Then we found Crystal Knot Films. They took the same footage and gave us a film that actually made us cry—in the best way. It felt real, emotional, and beautifully us. We’re so thankful they brought our memories back to life",
                name: "Hannah & Daniel Whitmore – Seattle, USA",
            },
            rightContent: {
                heading: "Videographers",
                text: "Crystal Knot Films were fantastic! Will definitely use them again. They were fast and the quality off work was excellent. They even took care too fix a few mistakes I made with my shoot. Highly recommend",
                name: "Palm Tree",
            }
        },
        {
            leftContent: {
                heading: "Client",
                text: "Our original video lacked soul—Crystal Knot made it feel like us again",
                name: "Emily & Jack (UK)",
            },
            rightContent: {
                heading: "Videographers",
                text: "Crystal Knot Films is our go-to for edits. They get our vision every time and always deliver beautiful, emotional stories. Super reliable and talented.",
                name: "Aesthete Films & Photograhy",
            }
        },
        {
            leftContent: {
                heading: "Client",
                text: "They turned boring clips into something cinematic and magical",
                name: "Natalie & James (USA)",
            },
            rightContent: {
                heading: "Videographers",
                text: "Outsourcing edits used to be risky—until we found Crystal Knot Films. They understand story, client vision, and fast delivery. Total lifesavers for our post-production bottlenecks.",
                name: "WildLens Weddings (Canada)",

            }

        },
        {
            leftContent: {
                heading: "Client",
                text: "It finally felt like a love story, not just a wedding video.",
                name: "Ava & Noah Klein – Sydney, Australia",
            },
            rightContent: {
                heading: "Videographers",
                text: "Our team handles the shoot, and Crystal Knot Films takes care of the magic in post. Their edits are emotional, premium, and always on-brand. A dream to work with",
                name: "Lumière Films (France)",

            }

        },
        {
            leftContent: {
                heading: "Client",
                text: "Crystal Knot Films fixed what others couldn’t. Now our wedding film actually feels like us.",
                name: "Claire & Daniel – Sydney, Australia",
            },
            rightContent: {
                heading: "Videographers",
                text: "We’ve been collaborating with Crystal Knot Films on multiple projects now. They’re professional, reliable, and their editing style aligns beautifully with modern European wedding aesthetics.",
                name: "Lichtblick Weddings (Germany)",

            }

        },
        {
            leftContent: {
                heading: "Client",
                text: "Our original wedding video looked like a school project. Crystal Knot Films gave us a cinematic masterpiece. Even our dog sat and watched it!",
                name: "Leo & Amara – Dubai, UAE",
            },
            rightContent: {
                heading: "Videographers",
                text: "Our clients are very specific, and Crystal Knot Films always delivers polished, elegant edits that wow them. Their work elevated our brand instantly.",
                name: "Tokyo Love Stories (Japan)",

            }

        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],
    }


    return (
        <div className="flex min-h-screen items-center justify-center bg-[#1E1E1E] p-4 md:p-8">
            <div className="w-full max-w-6xl space-y-8">
                <h2 className="text-center text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px]  text-white tracking-widest " style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>
                    "KIND WORDS"
                </h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-3 py-4 h-full">
                            <div className="w-full max-w-[800px] mx-auto rounded-xl border border-white bg-[rgba(140,140,140,0.3)] p-6 text-white shadow-lg flex flex-col md:flex-row min-h-[350px] backdrop-blur-sm">
                                {/* Left Section */}
                                <div className="flex-1 pr-0 md:pr-4 flex flex-col justify-between">
                                    <h3 className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-white mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>{testimonial.leftContent.heading}</h3>
                                    <p className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] leading-relaxed text-white/90 mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                        {testimonial.leftContent.text}
                                    </p>
                                    <div className="space-y-[2px]">
                                        {/* Star Rating for Left Section */}
                                        <div className="flex items-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>{testimonial.leftContent.name}</p>
                                    </div>
                                </div>

                                {/* Vertical/Horizontal Separator */}
                                <div className="h-[1px] w-full my-4 bg-white/20 md:w-[1px] md:h-auto md:mx-4 md:my-0"></div>

                                {/* Right Section */}
                                <div className="flex-1 pl-0 md:pl-4 flex flex-col justify-between">
                                    <h3 className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-white mb-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>{testimonial.rightContent.heading}</h3>
                                    <p className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] leading-relaxed text-white/90 mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                        {testimonial.rightContent.text}
                                    </p>
                                    <div className="space-y-[2px]">
                                        {/* Star Rating for Right Section */}
                                        <div className="flex items-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] leading-relaxed text-white" style={{ fontFamily: 'Quicksand, sans-serif' }}>{testimonial.rightContent.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
