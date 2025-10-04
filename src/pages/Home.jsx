import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WaveBackground } from "../components/WaveBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-950 to-indigo-950"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <WaveBackground />
            <Navbar
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />

            <main>
              <section id="home">
                <HeroSection />
              </section>
              <section id="about">
                <AboutSection />
              </section>
              <section id="skills">
                <SkillsSection />
              </section>
              <section id="projects">
                <ProjectsSection />
              </section>
              <section id="experience">
                <ExperienceSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
