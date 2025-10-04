// EnhancedFooter.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  Coffee,
  Code,
  Rocket,
  Star,
  ExternalLink,
  Send,
  ArrowUp,
  Calendar,
  Download,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/atharve16",
    color: "hover:text-gray-400",
    followers: "2.5K+",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/atharve-agrawal/",
    color: "hover:text-blue-400",
    followers: "5.2K+",
  },
  {
    name: "Email",
    icon: Code,
    url: "https://leetcode.com/u/atharve16/",
    color: "hover:text-green-400",
    followers: "Contact",
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "API Development",
  "Code Review",
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 border-t border-blue-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_70%)]" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {/* Logo */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Atharve Agrawal
                    </h3>
                    <p className="text-blue-300 text-sm">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-blue-200 leading-relaxed max-w-md">
                  Crafting exceptional digital experiences through innovative
                  code, creative design, and user-centered solutions. Let's
                  build something amazing together.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-blue-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">
                      Jabalpur, Madhya Pradesh, India
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-300">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 75879 24006</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">atharve004@amail.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-blue-400" />
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-blue-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <motion.a
                  href="https://drive.google.com/file/d/1YCPIoeISq5LvDwkqepJt25USHRZc7u5u/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-400" />
                Services
              </h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-blue-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    {service}
                  </motion.div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="pt-4">
                <h5 className="text-white font-medium mb-3">Stay Updated</h5>
                <form onSubmit={handleNewsletter} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-blue-400/50 focus:border-blue-400 focus:outline-none transition-colors"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-2 top-2 p-1.5 bg-blue-500 hover:bg-blue-600 rounded-md text-white transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                  {isSubscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm flex items-center gap-2"
                    >
                      <Star className="w-4 h-4" />
                      Thanks for subscribing!
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-blue-300 text-sm"
              >
                <span>© {new Date().getFullYear()} Portfolio.</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-yellow-400" />
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-50" />
      </div>
    </footer>
  );
};
