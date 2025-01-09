"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Facebook, MessageCircle, FileDown, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#121212]">
      <div className="container mx-auto px-12 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 J-Expression. All rights reserved.
          </p>
          <div>
            <a 
              href="https://wa.me/263719798269"
              className="px-2 py-2 hidden md:flex rounded-full bg-gray-800 font-bold flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
            >
              <MessageCircle size={20} />
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.github.com/fredericksamanga" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.x.com/freddy_samanga" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/frederick-samanga-6a5592207/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61561108237356" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <div>
          <div>
          <a 
            href="#home"
            className="px-3 py-3 rounded-full  font-medium flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
          >
          
            <ArrowUp size={20} />
          </a>
          </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}