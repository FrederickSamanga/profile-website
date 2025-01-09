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
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

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
            <div className="flex flex-row items-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
              >
                Send Message
                <Send size={20} />
              </button>
            </div>
            
          </motion.form>
        )}
        </motion.div>
    
    </section>
  );
};

export default EmailSection;