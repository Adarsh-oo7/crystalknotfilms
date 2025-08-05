'use client'

import { Pencil, Video, Download } from 'lucide-react'
import { motion } from 'framer-motion'


export function HowItWorks() {
    const steps = [
        {
            label: 'Tell Us',
            description:
                'Which package? What’s your deadline? Fill in the form and get a free quote within 24 hrs.',
            icon: Pencil,
        },
        {
            label: 'We Work',
            description:
                'We’ll start working and editing your footage as soon as we’ve the files & notes.',
            icon: Video,
        },
        {
            label: 'Download the Videos',
            description:
                'We’ll send the first video within 7 – 30 days and we offer three revisions.',
            icon: Download,
        },
    ]

    return (
        <div id='HowItWorks' className="w-full bg-white py-24 px-4">
            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-black mb-16" style={{ fontFamily: "Cinzel, Regular" }}>
                    HOW IT WORKS
                </h2>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 relative w-full">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const delay = index * 0.6

                        return (
                            <div
                                key={index}
                                className="relative w-full md:flex-1 flex flex-col items-center text-center"
                            >
                                {/* Step content animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-black bg-white text-gray-800 shadow-lg z-10">
                                        <Icon className="w-8 h-8 text-[#000000]" />
                                    </div>

                                    <p
                                        className="text-base font-semibold mt-4 text-black"
                                        style={{ fontFamily: 'Cinzel, Regular' }}
                                    >
                                        {step.label}
                                    </p>
                                    <p
                                        className="text-sm text-gray-800 mt-4"
                                        style={{ fontFamily: 'Quicksand, Regular' }}
                                    >
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Stepper line animation */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: delay + 0.6 }}
                                        className="hidden md:block absolute top-10 right-[-50%] w-full h-0.5 bg-black origin-left z-0"
                                    />
                                )}
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}
