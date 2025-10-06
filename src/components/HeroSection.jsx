import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Code, Rocket } from "lucide-react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    }),
  };

  const floatingIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Sparkles, delay: 0.5 },
    { Icon: Rocket, delay: 1 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/10"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
              />
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-400/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: 360,
          }}
          transition={{ delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            left: `${10 + index * 30}%`, // adjusted for smaller screens
            top: `${20 + index * 20}%`,
          }}
        >
          <Icon size={36} className="sm:size-48" />
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-3xl sm:max-w-5xl mx-auto">
        <motion.div className="mb-6 sm:mb-8" initial="hidden" animate="visible">
          <motion.h1
            custom={0}
            variants={textVariants}
            className="text-4xl sm:text-6xl font-bold mb-4 leading-tight sm:leading-snug"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Atharve
            </span>
            <motion.span
              className="text-white"
              animate={{
                textShadow: isHovered
                  ? "0 0 15px rgba(59, 130, 246, 0.5)"
                  : "0 0 0px rgba(59, 130, 246, 0)",
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              Agrawal
            </motion.span>
          </motion.h1>

          <motion.div
            custom={1}
            variants={textVariants}
            className="text-md sm:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed"
          >
            I'm a Full Stack Developer passionate about building elegant and fast web apps
            <br />
            <span className="text-blue-300 font-medium">
              with MERN Stack, Next.js, and Spring Boot
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          custom={2}
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
        >
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-blue-900 transition-colors duration-300"
          >
            Let's Connect
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center text-blue-300"
        >
          <span className="text-sm mb-2 tracking-wide">
            Let's build something amazing together!
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
