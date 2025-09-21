import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <motion.div
        className="absolute w-60 h-60 bg-green-500/30 rounded-full top-20 left-10 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-green-700/20 rounded-full bottom-10 right-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-2xl font-bold text-green-900">Website Name</span>
        </motion.div>

        {/* Navbar */}
        <motion.nav
          className="hidden md:flex space-x-4 px-4 py-2 rounded-xl bg-gradient-to-r from-green-800/50 via-green-700/30 to-green-800/50 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {["Home", "Features", "About", "FAQs", "Reviews"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white font-semibold px-3 py-1 rounded-lg transition-colors"
              whileHover={{
                scale: 1.1,
                color: "#6EE7B7",
                textShadow: "0 0 10px #6EE7B7",
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        <motion.button
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-900 text-white font-bold shadow-lg shadow-green-700/50 hover:shadow-green-500/80 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Login / Sign up
        </motion.button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center items-start h-full p-6 md:p-12 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-green-950">Empowering Farmers</span> <br /> 
          with AI-Driven <br /> Insights & Support
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-4 max-w-xl text-lg md:text-xl text-white/90"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          From disease diagnosis to disaster management, cultivate success with
          intelligent tools.
        </motion.p>

        {/* Buttons with Hover Effects */}
        <motion.div
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-green-700 to-green-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-green-700/40 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22c55e" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
