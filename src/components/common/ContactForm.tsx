"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Private Client / Studio",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Replace this with YOUR deployed Google Apps Script URL
      const googleScriptUrl =
        "https://script.google.com/macros/s/AKfycbwLJKaMBctvpf8Kz1g-oUx10WNO5GV7T9NLa6jEY08DBkpso9zXGgALIMWuvoDlgvY/exec";

      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value);
      });

      const response = await fetch(googleScriptUrl, {
        method: "POST",
        body: form,
      });

      const text = await response.text();
      console.log("📨 Google Script response:", text);

      if (!response.ok) {
        throw new Error(text || "Form submission failed");
      }

      toast.success("✅ Message Sent! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        category: "Private Client / Studio",
        message: "",
      });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      toast.error("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Heading */}
        <h1
          className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] font-normal text-black mb-6"
          style={{
            fontFamily: "Quicksand, sans-serif",
            letterSpacing: "0.05em",
            lineHeight: 1.4,
          }}
        >
          Customized Wedding Video Editing
          <br />
          <span className="text-lg font-normal">Starting From $150</span>
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 relative z-10">
          {/* Name */}
          <div className="mb-4">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-900 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-900 rounded-md text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
            />
          </div>

          {/* Dropdown */}
          <div className="mb-4">
            <select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-900 rounded-md text-black px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
            >
              <option value="Private Client / Studio">
                Private Client / Studio
              </option>
              <option value="Private Client">Private Client</option>
              <option value="Studio / Videographer">
                Studio / Videographer
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              required
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your project..."
              className="w-full border border-gray-900 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-900 bg-transparent"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 border border-black py-2 rounded-md font-normal transition bg-transparent text-black hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
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
