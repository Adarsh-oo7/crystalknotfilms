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
      Who are we?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      We’re a passionate team of 10 skilled editors, led by our founder and manager, working right here in India. With years of experience in wedding video editing and post-production, we’ve successfully completed over 3,000 projects — turning raw footage into unforgettable stories that couples and creators treasure for a lifetime.
    </AccordionContent>
  </AccordionItem>

  {/* How much does same day edit service cost? */}
  <AccordionItem value="item-2">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      How much does same day edit service cost?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Our wedding video editing rates depend on a few key factors — the total hours of raw footage, video quality, number of camera angles, turnaround time, and the specific editing style you need. For urgent projects like same-day wedding edits, we request you contact us at least 2–4 days before the event so we can plan and deliver the best results.
    </AccordionContent>
  </AccordionItem>

  {/* Our Motto? */}
  <AccordionItem value="item-3">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Our Motto?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      We focus on helping wedding videographers and photographers who are busy capturing unforgettable moments but don’t have the time or the right team to handle post-production. Our goal is to be the trusted editing partner they can rely on — delivering polished, cinematic films while they stay focused on what they do best: shooting the perfect moments.
    </AccordionContent>
  </AccordionItem>

  {/* What software do we use? */}
  <AccordionItem value="item-4">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      What software do we use?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      For video editing, we work with industry-leading tools like DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro, After Effects, and Adobe Audition. <br /><br />
      For photo editing, we use Adobe Lightroom and Photoshop.
    </AccordionContent>
  </AccordionItem>

  {/* How do I pay? */}
  <AccordionItem value="item-5">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      How do I pay?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      We accept payments through Remitly and PayPal. If you prefer another payment method, let us know — we’ll do our best to accommodate it.
    </AccordionContent>
  </AccordionItem>

  {/* What’s our editing process like? */}
  <AccordionItem value="item-6">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      What’s our editing process like?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Our editing process is fully tailored to your style, requirements, and vision. We consider factors like raw footage length, quality, number of camera angles, and your deadline. Once we start, we’ll deliver the final edit within the agreed timeframe. Every project includes unlimited revisions plus the complete project files (Premiere, DaVinci, or Final Cut) so you have everything you need.
    </AccordionContent>
  </AccordionItem>

  {/* How long will it take to edit my footage? */}
  <AccordionItem value="item-7">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      How long will it take to edit my footage?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Before we begin, we’ll discuss the details of your wedding video — including the style, length, and complexity of the edit. Based on this, we’ll give you both a quote and a delivery timeline. For urgent needs, we offer same-day wedding video editing (limited to 6–8 projects per month).
    </AccordionContent>
  </AccordionItem>

  {/* Is there anything you don’t do? */}
  <AccordionItem value="item-8">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Is there anything you don’t do in terms of post-production?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Get in touch with us and let the team know exactly what you’re looking for. We have years of experience in video editing and post-production. We can handle most types of projects, including specialised concert editing, podcasts, and cinematic storytelling.
    </AccordionContent>
  </AccordionItem>

  {/* Why should I outsource wedding video editing? */}
  <AccordionItem value="item-9">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Why should I outsource wedding video editing?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Editing a wedding film takes a lot of time. If you’re juggling multiple clients and shoots, it can be challenging to deliver top-quality videos quickly. By outsourcing, you get professional, high-quality results with fast turnarounds, while freeing up your schedule to focus on capturing more moments and growing your business.
    </AccordionContent>
  </AccordionItem>

  {/* Will my data be saved? */}
  <AccordionItem value="item-10">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Will my data be saved, and will I get my original footage back?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      By default, we keep your original footage until the final video is approved. After delivery, we store all files for up to 6 weeks. If you’d like us to keep them longer, just let us know in advance, and we’ll arrange it as part of our agreement.
    </AccordionContent>
  </AccordionItem>

  {/* Can you improve the quality of my wedding video? */}
  <AccordionItem value="item-11">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Can you improve the quality of my wedding video?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      Yes — depending on the quality and age of your footage. Our team will always do our best to enhance and optimise your video. Before we start, we’ll review your files and let you know exactly what improvements are possible.
    </AccordionContent>
  </AccordionItem>

  {/* How will I receive my finished product? */}
  <AccordionItem value="item-12">
    <AccordionTrigger
      className="text-sm sm:text-base text-start md:text-lg font-bold text-gray-800 hover:no-underline"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      How will I receive my finished product?
    </AccordionTrigger>
    <AccordionContent
      className="text-sm sm:text-base text-start text-gray-600"
      style={{ fontFamily: "Quicksand, Regular" }}
    >
      We deliver your final videos through Google Drive or Frame.io for fast, secure, and reliable transfers — making it easy for you to preview, download, and share your edits hassle-free.
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
