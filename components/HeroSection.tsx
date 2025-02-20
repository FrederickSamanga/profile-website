"use client";
import { motion } from "framer-motion";
import { ArrowRight, EyeIcon, FileCode, FileDown } from "lucide-react";
import ThreeScene from "./ThreeScene";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function HeroSection() {

  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Frederick", "Web Developer", "Graphic Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        
      </div>

      <div className="container mx-auto py-2 z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-8"
          >
            <h1 className="text-gray-400 mb-4 text-4xl sm:text-5xl text-center md:text-left md:text-6xl lg:text-7xl  lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-800">
              Greetings, I&apos;m{" "}
            </span>
            <br></br>
            <motion.span
              key={textIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r  from-gray-800 to-white"
            >
              {texts[textIndex]}
            </motion.span>
          </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className=" text-center md:text-left lg:text-left xl:text-left text-gray-400 mt-6 text-xl"
            >
              A passionate full-stack developer crafting beautiful and functional digital experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
              >
                Contact Me
                <ArrowRight size={20} />
              </a>
              <a 
                href="../../Frederick Samanga Resume.pdf"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-900 to-black font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
              >
                Download CV
                <FileDown size={20} />
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 rounded-full border-4 border-gray-800 text-white font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
                <EyeIcon size={20} />
              </a>
              
            </motion.div>
          </motion.div>
        </div>
        <div>
          <div className="w-120 h-120 bg-gray-800/25 py-5 rounded-full">
            <Image
            src="/images/profile-image.webp"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full mx-auto"
            />

          </div>

        </div>
        
      </div>

        </div>
        
    </section>
  );
}
