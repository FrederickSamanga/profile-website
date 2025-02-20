"use client";
import { motion } from "framer-motion";
import { Code2, Palette, Globe, Database, Server, Globe2Icon, GlobeIcon, Workflow} from "lucide-react";


const skills = [
  { name: "Core Java", icon: <Code2 size={24} /> },
  { name: "PostgreSQL", icon: <Database size={24} /> },
  { name: "Spring Boot", icon: <Server size={24} /> },
  { name: "NextJS", icon: <GlobeIcon size={24} /> },
  { name: "n8n Automation", icon: <Workflow size={24} /> },
  { name: "WordPress", icon: <Globe size={24} /> },
  { name: "Adobe Creative Suite", icon: <Palette size={24} /> }
];
export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold text-center md:text-left mb-4 bg-gradient-to-r from-gray-800 to-white text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-gray-400 text-center md:text-left mb-6">
          I am a Software Developer with a strong foundation in Core Java, PostgreSQL,
           and Spring Boot, specializing in building robust back-end systems and APIs.
           My expertise extends to crafting dynamic web applications with Next.js and
           creating custom WordPress themes and plugins to deliver tailored solutions.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-gray-800 to-white text-transparent bg-clip-text">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#1c1c1c] p-4 rounded-lg border border-[#333333]"
              >
                <div className="flex items-center gap-3">
                  <div className="text-whatsapp-green">{skill.icon}</div>
                  <h4 className="text-white">{skill.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
