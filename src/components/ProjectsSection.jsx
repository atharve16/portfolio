import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MediMate",
    subtitle: "Health Monitoring Platform",
    description:
      "A Health Monitoring Webapp designed to improve healthcare accessibility by enabling real-time doctor-patient communication, virtual consultations, and automated prescription generation.",
    image: "/portfolio/projects/project1.jpg",
    category: "Healthcare",
    tags: ["MERN", "JWT", "WebRTC", "Socket.io"],
    demoUrl: "#",
    githubUrl: "https://github.com/atharve16/MediMate",
    status: "OnGoing",
    featured: false,
  },
  {
    id: 2,
    title: "Talksy",
    subtitle: "AI Chatbot",
    description:
      "A Chatbot application built with the MERN stack to provide secure and interactive user experiences. Users can log in securely and engage in context-aware conversations.",
    image: "/portfolio/projects/project2.png",
    category: "Chatbot",
    tags: ["MERN", "Gemini API", "Bcrypt", "CI/CD"],
    demoUrl: "https://talksy-zeta.vercel.app/",
    githubUrl: "https://github.com/atharve16/Talksy",
    status: "Live",
    featured: true,
  },
  {
    id: 3,
    title: "LMS",
    subtitle: "Leave Management System",
    description:
      "A comprehensive Leave Management System built for a startup with ~50 employees. It handles employee leave applications, approvals, and balance tracking with role-based access control.",
    image: "/portfolio/projects/project3.png",
    category: "Management",
    tags: ["MERN", "Tailwind", "Role Based System", "CI/CD"],
    demoUrl: "https://lms-theta-liard.vercel.app/",
    githubUrl: "https://github.com/atharve16/LMS",
    status: "Live",
  },
  {
    id: 4,
    title: "Blogify",
    subtitle: "Modern Blogging Platform",
    description:
      "Blogify is a blog publishing WebApp that saves the user's stories and thoughts which may inspires others.",
    image: "/portfolio/projects/project4.jpg",
    category: "Web App",
    tags: ["React.js", "Spring Boot", "Maven", "MongoDB"],
    demoUrl: "https://blogify-steel-three.vercel.app/",
    githubUrl: "https://github.com/atharve16/Blogify",
    status: "Live",
    featured: true,
  },
  {
    id: 5,
    title: "DoorStep",
    subtitle: "Real Estate Business WebApp",
    description:
      "A real estate platform containg features like a homes listing dashboard with filtering, sorting, and a Chatbot widget for user interaction",
    image: "/portfolio/projects/project5.png",
    category: "ECommerce",
    tags: ["React.js", "Spring Boot", "CSRF", "MongoDB"],
    demoUrl: "https://doorstep-seven.vercel.app/",
    githubUrl: "https://github.com/atharve16/DoorStep",
    status: "Completed",
  },
  {
    id: 6,
    title: "SevenStake",
    subtitle: "Interactive Dice Game",
    description:
      "A dice game allowing players to bet on '7 Up', '7 Down', or 'Lucky 7' with starting points of 5000 and engaging gameplay mechanics.",
    image: "/portfolio/projects/project6.jpg",
    category: "Gaming",
    tags: ["MERN", "Gaming", "Interactive UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/atharve16/SevenStake",
    status: "Completed",
  },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    "All",
    "Healthcare",
    "Chatbot",
    "Management",
    "Gaming",
    "ECommerce",
  ];
  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-indigo-950/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-400/20 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Rocket className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">My Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects I've
            </span>
            <br />
            <span className="text-white">Built</span>
          </h2>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 flex flex-col md:flex-row">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center w-full"
              >
                {/* Left: Text */}
                <div className="w-full md:w-1/2 p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {featuredProjects[currentSlide]?.category}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                      {featuredProjects[currentSlide]?.status}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {featuredProjects[currentSlide]?.title}
                  </h3>
                  <p className="text-lg text-blue-300 mb-4">
                    {featuredProjects[currentSlide]?.subtitle}
                  </p>
                  <p className="text-blue-200 mb-6 leading-relaxed">
                    {featuredProjects[currentSlide]?.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={featuredProjects[currentSlide]?.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium"
                    >
                      <Eye size={18} />
                      {featuredProjects[currentSlide]?.demoUrl === "#"
                        ? "View Code"
                        : "View Live"}
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={featuredProjects[currentSlide]?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-medium"
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredProjects[currentSlide]?.image}
                    alt={featuredProjects[currentSlide]?.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-300 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full text-blue-300 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-400" : "bg-blue-400/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                  : "bg-slate-800/50 text-blue-200 hover:bg-slate-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative mb-4 rounded-t-2xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-blue-300 transition-colors"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-200 mb-4 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-300"
                          : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Hover overlay fix */}
                <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/atharve16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold"
          >
            <Github size={20} />
            <span>See More on GitHub</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
