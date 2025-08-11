import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f5] overflow-hidden flex items-center justify-center py-16">
      {/* Top-left diagonal background shape */}
      {/* <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1E1E1E] transform -rotate-45 -translate-x-1/2 -translate-y-1/2 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]" /> */}
      {/* Bottom-right diagonal background shape */}
      {/* <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1E1E1E] transform rotate-45 translate-x-1/2 translate-y-1/2 md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Accordion */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-normal tracking-tight text-black"
                style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.09em', lineHeight: 1.4, }}
              >
                WHY <br /> CRYSTAL KNOT FILMS?
              </h2>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                Aren&apos;t there Thousands of wedding video editors out there? What makes Crystal Knot Films apart?

              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-800 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                (Hold my Chai!)
              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                Our videos wont bore you to death!<br />
                Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it’s almost 2025! Your iPhones can do that!
                Our wedding films bring in a perfect mixture of real-time emotions with those cinematic slow-motion sequences that will make your eyes sparkle with awe.
                Each of our wedding Films is unique. Beautifully put together to reflect our couples, they journey and their love story.

              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                Quality over quantity, always.<br />
                We only take on a limited number of weddings each year so we can obsess over every detail. You’re not “just another project” — you’re the project.
              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                We guide, you chill.<br/>
                From the moment you hand over the footage to the final delivery, we keep the process simple and stress-free. You relax — we edit like our coffee depends on it. "

              </p>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  Less Posey-shosey, and more Candid-Shandid.
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm sm:text-base text-start text-gray-600"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  Don’t get us wrong, all those Sabyasachi and GQ poses have their place and time. But there is nothing better than the natural versions of our couples. If I have to define our videography style, that would be a perfect mix of - &apos;Documentary &amp; Editorial.&apos;
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger
                  className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  Family Matters.
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm sm:text-base text-gray-600"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  We understand the importance of family and make sure to incorporate not only the glittery part of our couple&apos;s wedding week but also their most beloved asset - Their Families.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger
                  className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  Our videos won&apos;t bore you to death!
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm sm:text-base text-gray-600"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  Our videos won&apos;t bore you to death! <br /><br />
                  Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it&apos;s almost 2025! Your iPhones can do that! <br /><br />
                  Our wedding films bring in a perfect mixture of real-time emotions with those cinematic slow-motion sequences that will make your eyes sparkle with awe. <br /><br />
                  Each of our wedding Films is unique. Beautifully put together to reflect our couples, their journey and their love story.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger
                  className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  The more the merrier? - Boo!!
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm sm:text-base text-gray-600"
                  style={{ fontFamily: "Quicksand, Regular" }}
                >
                  This helps us ensure we serve you (our couples) the best - from onboarding to delivering your wedding films. We are here to guide you every step of the way.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="./images/Chelsea&Liam (11 of 24).jpg"
              width={500}
              height={550}
              alt="A smiling couple, with the woman laughing and the man smiling in the background."
              className="rounded-lg shadow-lg object-cover max-h-[550px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
