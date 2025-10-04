import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Heart,
  Users,
  BookOpen,
  Target,
  Lightbulb,
  Rocket,
  Briefcase,
  Award,
} from "lucide-react";

const aboutStats = [
  { number: "30+", label: "Projects Completed", icon: Lightbulb },
  { number: "1+", label: "Year Of Experience", icon: Briefcase },
  { number: "8+", label: "Technologies Mastered", icon: Code },
  { number: "10+", label: "Certifications Acheived", icon: Award },
];

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications using MERN stack, Next.js, and Spring Boot with modern best practices.",
    color: "from-blue-400 to-cyan-400",
    features: [
      "React & Next.js",
      "Node.js & Express",
      "Spring Boot",
      "Database Design",
    ],
  },
  {
    icon: Palette,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
    color: "from-purple-400 to-pink-400",
    features: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Zap,
    title: "Backend Development",
    description:
      "Building robust APIs and server-side applications with Node.js, Express, and Java Spring Boot.",
    color: "from-green-400 to-blue-400",
    features: [
      "Node.js/Express",
      "Spring Boot",
      "REST APIs",
      "Database Integration",
    ],
  },
  {
    icon: Rocket,
    title: "AI Integration",
    description:
      "Implementing AI-powered features using modern APIs like Gemini AI for intelligent applications.",
    color: "from-orange-400 to-red-400",
    features: [
      "Gemini API",
      "Chatbot Development",
      "AI Features",
      "Smart Solutions",
    ],
  },
];

const personalValues = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description:
      "I believe great code comes from genuine passion for solving real-world problems and creating meaningful impact.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working effectively with teams to deliver high-quality solutions and sharing knowledge for mutual growth.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Regularly practicing on LeetCode and staying current with emerging technologies and industry best practices.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "Strong foundation in OOPS, DSA, and DBMS with focus on writing clean, efficient, and maintainable code.",
  },
];

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("story");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    { id: "story", label: "My Story", icon: BookOpen },
    { id: "services", label: "What I Do", icon: Zap },
    { id: "values", label: "My Values", icon: Heart },
  ];

  return (
    <section
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-purple-950/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm sm:text-base">
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Passionate
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mb-12 sm:mb-16 overflow-x-auto"
        >
          <div className="flex bg-slate-800/50 rounded-2xl p-1.5 sm:p-2 backdrop-blur-sm border border-blue-500/20 min-w-max">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "text-blue-200 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <tab.icon size={18} className="sm:w-5 sm:h-5" />
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "story" && (
            <div className="space-y-16">
              {/* Story Content */}
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                {/* Left Side - Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-snug">
                    Turning Ideas Into{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                      Reality
                    </span>
                  </h3>

                  <div className="space-y-4 text-blue-200 text-sm sm:text-base leading-relaxed">
                    <p>
                      I'm{" "}
                      <strong className="text-white">Atharve Agrawal</strong>, a
                      passionate developer with real-world experience in
                      frontend frameworks like{" "}
                      <strong className="text-blue-400">React.js</strong> and{" "}
                      <strong className="text-blue-400">Next.js</strong>, as
                      well as backend tools such as{" "}
                      <strong className="text-blue-400">Spring Boot</strong> and{" "}
                      <strong className="text-blue-400">Node.js</strong>.
                    </p>

                    <p>
                      I’ve built impactful projects like{" "}
                      <strong className="text-blue-400">MediMate</strong>,{" "}
                      <strong className="text-blue-400">EduVise</strong>, and{" "}
                      <strong className="text-blue-400">Talksy</strong> — an AI
                      chatbot — gaining hands-on experience in modern web
                      development, cloud integration, and scalable
                      architectures.
                    </p>

                    <p>
                      My foundation lies in{" "}
                      <strong className="text-blue-400">OOPS</strong>,{" "}
                      <strong className="text-blue-400">DSA</strong>, and{" "}
                      <strong className="text-blue-400">DBMS</strong>. I
                      regularly practice on{" "}
                      <strong className="text-blue-400">LeetCode</strong> to
                      refine my skills and stay sharp in solving real-world
                      challenges.
                    </p>
                  </div>
                </motion.div>

                {/* Right Side - Animated Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 gap-6 mt-10 lg:mt-0"
                >
                  {aboutStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-5 sm:p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 flex flex-col items-center text-center"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                        <stat.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                        {stat.number}
                      </h4>
                      <p className="text-blue-300 text-sm sm:text-base">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-blue-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {personalValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
