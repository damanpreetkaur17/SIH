import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-green-900 text-white py-24 px-6 lg:px-20 overflow-hidden">
      {/* Floating Background Patches */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-800/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-600/20 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-3 gap-12 z-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-green-200">AgroVerse</h2>
          <p className="text-green-300">
            Empowering farmers with smart AI tools for crop recommendations, disease detection, disaster alerts, and more.
          </p>

        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-green-200">Quick Links</h3>
          <ul className="space-y-2 text-green-300">
            <li>
              <a href="#features" className="hover:text-lime-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-lime-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-lime-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#Home" className="hover:text-lime-400 transition">
                Home
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-green-200">Subscribe</h3>
          <p className="text-green-300">Get the latest updates and tips directly in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-xl bg-green-800/50 placeholder-green-300 text-white focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-green-950 px-4 rounded-r-xl hover:bg-lime-500 transition"
            >
              <Mail className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 border-t border-green-700/40 pt-6 text-center text-green-100 text-sm"
      >
        &copy; {new Date().getFullYear()} AgroVerse. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
