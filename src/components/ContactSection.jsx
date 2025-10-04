import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Coffee,
  Sparkles,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "atharve004@gmail.com",
      description: "Send me an email anytime",
      action: "mailto:atharve004@gmail.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 75879 24006",
      description: "Call me during business hours",
      action: "tel:+917587924006",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jabalpur, Madhya Pradesh, India",
      description: "Available for remote work",
      action: "#",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/atharve16",
      color: "hover:bg-gray-600",
      followers: "40+ Repos",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/atharve-agrawal",
      color: "hover:bg-blue-600",
      followers: "Connect",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      url: "#",
      color: "hover:bg-indigo-600",
      followers: "Chat",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-indigo-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Let's
            </span>
            <span className="text-white">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-blue-400" />
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white`}
                    >
                      <method.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">
                        {method.label}
                      </h4>
                      <p className="text-blue-300 text-sm">{method.value}</p>
                      <p className="text-blue-400 text-xs">
                        {method.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-between p-4 bg-slate-700/30 rounded-xl transition-all duration-300 ${social.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">
                        {social.label}
                      </span>
                    </div>
                    <span className="text-blue-300 text-sm">
                      {social.followers}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
              {/* Success State */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-green-500/10 flex items-center justify-center z-10 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-green-300">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-white">
                  Send a Message
                </h3>
                <div className="flex items-center gap-2 text-blue-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm">Available for work</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-blue-300 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-blue-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-blue-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Project Discussion"
                  />
                </div>

                <div className="group">
                  <label className="block text-blue-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white placeholder-blue-400/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
