"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WhatsApp Business Chatbot",
    description: "A chatbot that helps businesses automate customer service on WhatsApp.",
    image: "../../images/n8n.png",
    tags: ["n8n", "WhatsApp Business API", "Open AI Chat & Embeddings", "Pinecone Vector Store", "Slack API", "PostgreSQL", "AirTable"],
    github: "#projects",
    demo: "#projects"
  },
  {
    title: "Portfolio Website",
    description: "A modern web application built with Next.js and TypeScript.",
    image: "../../images/projects/web1.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://www.github.com/fredericksamanga/fred-portfolio",
    demo: "j-expression.com"
  },
  {
    title: "TaskUp",
    description: "Full-stack application with real-time features build with Spring Boot and NextJS.",
    image: "../../images/projects/code.png",
    tags: ["Spring Boot", "PostgreSQl", "Keycloak", "NextJS", "Tailwind"],
    github: "https://www.github.com/fredericksamanga/TaskUp",
    demo: "https://www.github.com/fredericksamanga/TaskUp"
  },

  {
    title: "SpotlightZim",
    description: "Full-stack application with real-time features build with Spring Boot and NextJS.",
    image: "../../images/projects/code.png",
    tags: ["Spring Boot", "PostgreSQl", "Keycloak", "NextJS", "Tailwind"],
    github: "https://www.github.com/fredericksamanga/spotlight-zim",
    demo: "https://www.github.com/fredericksamanga/spotlight-zim"
  },
  {
    title: "Design Portfolio",
    description: "Creative designs that i have worked on.",
    image: "../../images/projects/design.jpg",
    tags: ["Adobe Creative Suite"],
    github: "#projects",
    demo: "https://www.facebook.com/profile.php?id=61561108237356"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 bg-gradient-to-r text-center md:text-left from-white via-gray-800 to-white text-transparent bg-clip-text"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-[#333333]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#333333] rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}