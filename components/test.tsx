"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  interface FormData {
    email: string;
    subject: string;
    message: string;
  }

  interface FetchOptions {
    method: string;
    headers: {
      "Content-Type": string;
    };
    body: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormData = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const options: FetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch("/api/send", options);
      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <motion.div>
        {emailSubmitted ? (
          <p>Email sent successfully!</p>
        ) : (
          <motion.form onSubmit={handleSubmit}>
            <div>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Your email"
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
                className="w-full p-3 bg-[#1c1c1c] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-whatsapp-green"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                rows={4}
                className="w-full p-3 bg-[#1c1c1c] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-whatsapp-green"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
            >
              Send Message
              <Send size={20} />
            </button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;