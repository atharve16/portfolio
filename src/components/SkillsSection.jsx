// AnimatedSkillsSection.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Server, Palette, Zap, Code2Icon } from 'lucide-react';

const skillsData = {
  frontend: {
    icon: Palette,
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "HTML/CSS", level: 99, experience: "3+ years" },
      { name: "JavaScript", level: 90, experience: "2+ years" },
      { name: "TypeScript", level: 60, experience: "1+ years" },
      { name: "React.js", level: 88, experience: "2+ years" },
      { name: "Next.js", level: 85, experience: "1+ years" },
      { name: "Tailwind CSS", level: 87, experience: "2+ years" },
    ]
  },
  backend: {
    icon: Server,
    color: "from-indigo-400 to-blue-500",
    skills: [
      { name: "Node.js", level: 90, experience: "2+ years" },
      { name: "Express.js", level: 90, experience: "2+ years" },
      { name: "Java", level: 75, experience: "1+ year" },
      { name: "Spring Boot", level: 85, experience: "1+ year" },
    ]
  },
  database: {
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "MySQL", level: 95, experience: "2+ years" },
      { name: "MongoDB", level: 80, experience: "2+ years" },
    ]
  },
  tools: {
    icon: Zap,
    color: "from-indigo-600 to-purple-600",
    skills: [
      { name: "GitHub", level: 99, experience: "3+ years" },
      { name: "Firebase", level: 99, experience: "2+ years" },
      { name: "VS Code", level: 99, experience: "3+ years" },
      { name: "IntelliJ IDEA", level: 99, experience: "2+ years" },
    ]
  }
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.keys(skillsData);

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
            <Code2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm sm:text-base">
              My Skills
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
            <br />
            <span className="text-white">Worked with</span>
          </h2>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => {
            const IconComponent = skillsData[category].icon;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${skillsData[category].color} text-white shadow-lg`
                    : 'bg-slate-800/50 text-blue-200 hover:bg-slate-700/50'
                }`}
              >
                <IconComponent size={20} />
                <span className="capitalize">{category}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                    {skill.experience}
                  </span>
                </div>

                {/* Skill Level Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-200">Proficiency</span>
                    <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skillsData[activeCategory].color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skillsData[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
