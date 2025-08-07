"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Send formData to backend (API, Google Sheet, etc.)
        console.log("Form Submitted:", formData);
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-normal mb-6 text-gray-800 text-center" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}>GET IN TOUCH</h2>

                <div className="mb-4">

                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full Name"
                        style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}
                    />
                </div>

                <div className="mb-4">

                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                        style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}

                    />
                </div>

                <div className="mb-4">

                    <select
                        required
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}

                    >
                        <option value="Private Client / Studio">Private Client / Studio</option>
                        <option value="Private Client">Private Client</option>
                        <option value="Studio / Videographer">Studio / Videographer</option>
                    </select>
                </div>

                <div className="mb-6">

                    <textarea
                        required
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border font-normal border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us more about your project..."
                        style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}

                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-normal hover:bg-blue-700 transition"
                    style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}

                >
                    Submit
                </button>

                {submitted && (
                    <p className="mt-4 text-green-600 text-sm" style={{ fontFamily: 'Quicksand, sans-serif', letterSpacing: '0.1em', lineHeight: 1.4, }}
                    >
                        Thank you! Your response has been recorded.
                    </p>
                )}
            </form>
        </div>
    );
}
