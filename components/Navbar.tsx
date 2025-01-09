"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon, Menu, MessageCircle, MessageCircleCodeIcon, MessageCircleHeart, MessageCircleMoreIcon, MessageCirclePlus, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { ArrowRight, EyeIcon, FileCode, FileDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      id="navbar"
      className="fixed top-3 left-3 right-3 z-50 bg-gray-900/5 backdrop-blur-md border border-[#333333]"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text"
          >
          <Link href="/">
            <Image
              src="/j-expression.png"
              alt="Logo"
              width={36}
              height={24}
              className="h-8 sm:h-8 md:h-8 lg:h-8 xl:h-8"
            />
          </Link>
          </motion.div>
          <div>
            <a 
              href="https://wa.me/263719798269"
              className="px-6 py-2 rounded-full bg-whatsapp-green font-bold flex items-center justify-center gap-2 hover:opacity-70 transition-opacity"
            >
              WhatsApp Me
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/80 hover:text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}