"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react"
// import { toast } from 'sonner'


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("category", formData.category);
    form.append("message", formData.message);
    form.append("formGoogleSheetName", "CrystalKnotFilms");
    form.append("formDataNameOrder", JSON.stringify(["name", "email", "category", "message"]));
    form.append("formGoogleSendEmail", "crystalknotfilms@gmail.com");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxSkrQ037aGn4zYqB6dOkw4RCeMrWUiwBwMipbOimaWbve0JB4JwyayG_nDEAGvBLE/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: form,
        }
      );

      // even if the response can't be read, assume success
      setFormData({
        name: "",
        email: "",
        category: "",
        message: "",
      });
      toast.success("Message sent successfully!");
      setIsSubmitting(false);
    } catch (error) {
      toast.error("Network error. Please try again later.");
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Heading */}
        <h1
          className="text-3xl font-semibold text-black mb-6"
          style={{
            fontFamily: "Quicksand, sans-serif",
            letterSpacing: "0.05em",
            lineHeight: 1.4,
          }}
        >
          Customized Wedding Video Editing
          <br />
          <span className="text-lg font-normal">Starting From $350</span>
        </h1>

        {/* Form */}
        <form
          id="submit-form"
          onSubmit={handleSubmit}
          className="p-8   "
        >
          {/* <h2
            className="text-2xl font-normal mb-6 text-black"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.1em",
              lineHeight: 1.4,
            }}
          >
            GET IN TOUCH
          </h2> */}

          {/* Name */}
          <div className="mb-4">
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-900 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
              placeholder="Full Name"
              style={{
                fontFamily: "Quicksand, sans-serif",
                letterSpacing: "0.1em",
                lineHeight: 1.4,
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-900 rounded-md text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
              placeholder="Email"
              style={{
                fontFamily: "Quicksand, sans-serif",
                letterSpacing: "0.1em",
                lineHeight: 1.4,
              }}
            />
          </div>

          {/* Dropdown */}
          <div className="mb-4">
            <select
              required
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-900 rounded-md text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
              style={{
                fontFamily: "Quicksand, sans-serif",
                letterSpacing: "0.1em",
                lineHeight: 1.4,
              }}
            >

              <option value="Private Client / Studio">Private Client / Studio</option>
              <option value="Private Client">Private Client</option>
              <option value="Studio / Videographer">Studio / Videographer</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-900 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
              placeholder="Tell us more about your project..."
              style={{
                fontFamily: "Quicksand, sans-serif",
                letterSpacing: "0.1em",
                lineHeight: 1.4,
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 border border-black py-2 rounded-md font-normal transition
             bg-transparent text-black hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fontFamily: "Quicksand, sans-serif",
              letterSpacing: "0.1em",
              lineHeight: 1.4,
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>

        </form>
      </div>
    </div>
  );
}



