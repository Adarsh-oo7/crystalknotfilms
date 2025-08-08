import React from 'react'
import Link from 'next/link'
function Pricing() {
    return (
        <div className="bg-[#1E1E1E] py-20 text-white">
            {/* Top Heading */}
            <h1 className="text-4xl font-bold text-center mb-12">PRICING</h1>

            {/* Pricing Cards Container */}
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {/* Card 1 */}
                <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-transparent border border-white rounded-xl shadow-sm p-6">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center">
                            <span className="bg-white text-black px-4 py-1 rounded text-xl font-semibold">HIGHLIGHTS</span>
                        </h2>
                        <p className="text-lg text-center mt-2 font-medium">
                            FROM
                        </p>
                        <p className="text-4xl text-center mt-2 font-medium">
                            $200
                        </p>
                        <ul className="flex flex-col gap-3 text-sm mt-6 items-center text-center">
                            <li><CheckIcon /><span>3 - 8 min long</span></li>
                            <li><CheckIcon /><span>1 - 3 cameras incl. drones</span></li>
                            <li><CheckIcon /><span>Upto 10hrs of raw footage</span></li>
                            <li><CheckIcon /><span>Three Revisions + Premiere files</span></li>
                        </ul>
                        <Link
                            href="/Pricing"
                            className="mt-6 inline-block px-6 py-2 rounded-md border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
                        >
                            View More
                        </Link>

                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-transparent border border-white rounded-xl shadow-sm p-6">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center">
                            <span className="bg-white text-black px-4 py-1 rounded text-xl font-semibold">HIGHLIGHTS</span>
                        </h2>
                        <p className="text-lg text-center mt-2 font-medium">
                            FROM
                        </p>
                        <p className="text-4xl text-center mt-2 font-medium">
                            $300
                        </p>
                        <ul className="flex flex-col gap-3 text-sm mt-6 items-center text-center">
                            <li><CheckIcon /><span>10 - 15 min long</span></li>
                            <li><CheckIcon /><span>1 - 3 cameras incl. drones</span></li>
                            <li><CheckIcon /><span>Upto 10hrs of raw footage</span></li>
                            <li><CheckIcon /><span>Three Revisions + Premiere files</span></li>
                        </ul>
                        <Link
                            href="/Pricing"
                            className="mt-6 inline-block px-6 py-2 rounded-md border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
                        >
                            View More
                        </Link>

                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] bg-transparent border border-white rounded-xl shadow-sm p-6">
                    <div className="flex flex-col items-center">
                        <h2 className="text-center">
                            <span className="bg-white text-black px-4 py-1 rounded text-xl font-semibold">HIGHLIGHTS</span>
                        </h2>
                        <p className="text-lg text-center mt-2 font-medium">
                            FROM
                        </p>
                        <p className="text-4xl text-center mt-2 font-medium">
                            $325
                        </p>
                        <ul className="flex flex-col gap-3 text-sm mt-6 items-center text-center">
                            <li><CheckIcon /><span>30 - 60 min long</span></li>
                            <li><CheckIcon /><span>1 - 3 cameras incl. drones</span></li>
                            <li><CheckIcon /><span>Upto 12hrs of raw footage</span></li>
                            <li><CheckIcon /><span>Three Revisions + Premiere files</span></li>
                        </ul>
                        <a
                            href="/Pricing"
                            className="mt-6 inline-block px-6 py-2 rounded-md border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white hover:text-black transition"
                        >
                            View More
                        </a>


                    </div>
                </div>
            </div>
        </div>
    )
}

function CheckIcon({ disabled = false }: { disabled?: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-4 me-2 inline-block ${disabled ? 'text-green-400/50' : 'text-green-400'
                }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>

    )
}

export default Pricing
