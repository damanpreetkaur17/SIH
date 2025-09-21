import React from "react";
import { motion } from "framer-motion";
import agriculture from "../assets/Farms.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Circle Patches */}
      <motion.div
        className="absolute w-72 h-72 bg-green-200/20 dark:bg-green-400/20 rounded-full top-10 left-10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-60 h-60 bg-emerald-200/20 dark:bg-emerald-400/20 rounded-full bottom-20 right-10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-lime-200/15 dark:bg-lime-400/15 rounded-full top-1/2 left-1/3 blur-3xl"
        animate={{ y: [-10, 10, -10], x: [0, 10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Section */}
      <motion.div
        className="hidden md:flex w-1/2 relative flex-col justify-center items-center p-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Website name</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xs">
          Intelligent Agriculture Solutions for Modern Farming
        </p>
        <img
          src={agriculture}
          alt="Agriculture"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </motion.div>

      {/* Login Form */}
      <motion.div
        className="flex flex-1 justify-center items-center px-6 relative z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Login
          </motion.h2>

          <form className="space-y-5">
            {/* Email */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white transition"
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:text-white transition"
              />
            </motion.div>

            {/* Forgot Password */}
            <motion.div
              className="flex justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#"
                className="text-sm text-green-600 hover:text-green-800 dark:text-green-400 transition"
              >
                Forgot password?
              </a>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>

            {/* Sign Up Link */}
            <motion.p
              className="text-center text-sm text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Don't have an account?{" "}
              <a
                href="#"
                className="text-green-600 hover:text-green-800 dark:text-green-400"
              >
                Sign Up
              </a>
            </motion.p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
