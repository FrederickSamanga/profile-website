"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (formData.message.trim().length === 0) {
      alert("Message cannot be empty.");
      return;
    }

    const endpoint = "/api/send"; //API route

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    console.log("Sending request to:", endpoint);
    console.log("Request options:", options);

    setLoading(true);
    try {
      const response = await fetch(endpoint, options);
      if (response.ok) {
        console.log("Email sent successfully");
        setEmailSubmitted(true);
      } else {
        console.error("Failed to send email");
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-white via-gray-800 to-black text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-4">
            I'm currently available for freelance work or full-time positions.
            Drop me a message if you'd like to work together!
          </p>
        </div>

        {emailSubmitted ? (
          <p className="text-whatsapp-green text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4" onSubmit={handleSubmit}
          >
            <div>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-[#1c1c1c] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-whatsapp-green"
              />
            </div>
            <div>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-[#1c1c1c] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-whatsapp-green"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-[#1c1c1c] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-whatsapp-green"
              />
            </div>
            <div className="flex flex-row items-center">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 rounded-full ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
                } font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={20} />}
              </button>
            </div>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
