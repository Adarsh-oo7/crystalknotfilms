import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f5] overflow-hidden flex items-center justify-center py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text and Accordion */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-[26px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[36px] font-normal tracking-tight text-black"
                style={{ fontFamily: 'Cinzel, sans-serif', letterSpacing: '0.09em', lineHeight: 1.4 }}
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
              {/* <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                Our videos won&apos;t bore you to death!<br />
                Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it&apos;s almost 2025! Your iPhones can do that!
                Our wedding films bring in a perfect mixture of real-time emotions with those cinematic slow-motion sequences that will make your eyes sparkle with awe.
                Each of our wedding Films is unique. Beautifully put together to reflect our couples, their journey and their love story.
              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                Quality over quantity, always.<br />
                We only take on a limited number of weddings each year so we can obsess over every detail. You&apos;re not &quot;just another project&quot; — you&apos;re the project.
              </p>
              <p
                className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16px] text-gray-500 max-w-md"
                style={{ fontFamily: "Quicksand, Regular" }}
              >
                We guide, you chill.<br />
                From the moment you hand over the footage to the final delivery, we keep the process simple and stress-free. You relax — we edit like our coffee&nbsp;depends&nbsp;on&nbsp;it.&nbsp;&quot;
              </p> */}
            </div>

<Accordion type="single" collapsible className="w-full max-w-md">
  {/* Who are we? */}
  <AccordionItem value="item-1">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Our videos wont bore you to death!

    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
Have you observed that most of the wedding videos you see are just plain slow-motion walking clips of the couple? God, it’s almost 2025! Your iPhones can do that!
Our wedding films bring in a perfect mixture of real-time emotions with those cinematic slow-motion sequences that will make your eyes sparkle with awe.
Each of our wedding Films is unique. Beautifully put together to reflect our couples, they journey and their love story.
    </AccordionContent>
  </AccordionItem>

  {/* How much does same day edit service cost? */}
  <AccordionItem value="item-2">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
Quality over quantity, always.
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
We only take on a limited number of weddings each year so we can obsess over every detail. You’re not “just another project” — you’re the project.
    </AccordionContent>
  </AccordionItem>

  {/* Our Motto? */}
  <AccordionItem value="item-3">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
We guide, you chill.
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
From the moment you hand over the footage to the final delivery, we keep the process simple and stress-free. You relax — we edit like our coffee depends on it.    </AccordionContent>
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
