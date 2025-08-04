import { Pencil, Video, Download } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      label: "Tell Us",
      description:
        "Which package? What’s your deadline? Fill in the form and get a free quote within 24 hrs.",
      icon: Pencil,
    },
    {
      label: "We Work",
      description:
        "We’ll start working and editing your footage as soon as we’ve the files & notes.",
      icon: Video,
    },
    {
      label: "Download the Videos",
      description:
        "We’ll send the first video within 7 – 30 days and we offer three revisions.",
      icon: Download,
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">HOW IT WORKS</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center relative w-full md:flex-1"
            >
              {/* Circle Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-gray-300 bg-white text-gray-600 shadow-md">
                <Icon className="w-8 h-8" />
              </div>

              {/* Connector line (only on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-[-50%] w-full h-1 bg-gray-300 z-[-1]" />
              )}

              {/* Label */}
              <p className="text-base font-semibold mt-4">{step.label}</p>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1">{step.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
