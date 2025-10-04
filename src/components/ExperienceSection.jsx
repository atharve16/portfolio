import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Harsh Hasthkala",
    location: "Jabalpur, MP",
    period: "Aug 2024 - Present",
    type: "Full-time",
    description:
      "Built and maintained a feature-rich e-commerce website using Next.js. Implemented Firebase for backend services including authentication and database. Focused on SEO optimization, performance tuning, and reusable component design—resulting in a 25% boost in site speed and usability.",
    technologies: [
      "Next.js",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    highlights: [
      { metric: "45%", label: "Traffic Increase" },
      { metric: "30+", label: "Components Built" },
      { metric: "8", label: "Team Members Led" },
    ],
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "Orange-Bit",
    location: "Remote",
    period: "May 2024 - Aug 2024",
    type: "Full-time",
    description:
      "Developed a QR scan and geo-location based attendance tracking system to monitor working hours accurately. Built 20+ reusable components, improving user experience and Clients Satisfaction.",
    technologies: ["React", "Firebase", "QR Integration", "Geolocation API"],
    highlights: [
      { metric: "40%", label: "Response Time Reduction" },
      { metric: "100%", label: "On-time Delivery" },
      { metric: "8+", label: "Client Projects" },
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 to-indigo-950/30" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm md:text-base">Career Journey</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Professional
            </span>
            <br />
            <span className="text-white">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-12 md:mb-20"
        >
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-600 opacity-30" />
          
          {/* Mobile timeline line - visible only on mobile */}
          <div className="md:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 to-indigo-600 opacity-30" />

          <div className="space-y-8 md:space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full border-2 md:border-4 border-slate-900 z-10" />

                <div
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group"
                  >
                    <div className="mb-6">
                      <div className="text-left">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-blue-300 mb-1 text-sm md:text-base">
                          <Briefcase size={16} className="flex-shrink-0" />
                          <span className="font-medium">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-400 text-xs md:text-sm mb-1">
                          <MapPin size={14} className="flex-shrink-0" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-blue-400 text-xs md:text-sm">
                          <Calendar size={14} className="flex-shrink-0" />
                          <span>{experience.period}</span>
                          <span className="px-2 py-1 bg-blue-500/20 rounded-full text-xs">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-blue-200 leading-relaxed mb-6 text-sm md:text-base text-left">
                      {experience.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg md:text-2xl font-bold text-blue-400">
                            {highlight.metric}
                          </div>
                          <div className="text-xs text-blue-300">
                            {highlight.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}