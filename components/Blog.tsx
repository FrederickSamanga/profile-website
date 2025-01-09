"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Building Modern Web Applications",
    excerpt: "Learn about the latest trends in web development and how to implement them.",
    date: "2025-01-09",
    readTime: "5 min read",
    Link: "#blog"
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming technologies and methodologies in frontend development.",
    date: "2025-01-09",
    readTime: "4 min read",
    Link: "#blog"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center md:text-left mb-8 bg-gradient-to-r from-white via-gray-800 to-black text-transparent bg-clip-text"
      >
        Latest Blog Posts
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1c1c1c] p-6 rounded-lg border border-[#333333]"
          >
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {post.date}
              </div>
              <span>{post.readTime} {post.Link && (
                <Link href={post.Link} className="text-whatsapp-green pl-2">Read</Link>
              )}</span>
          
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}