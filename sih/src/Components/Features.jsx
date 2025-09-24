import React from "react";
import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  MapIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "AI Query Chat",
    description:
      "Get instant answers and suggestions for all your farming queries using AI chat.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Image-based Disease Diagnosis",
    description:
      "Upload crop images and instantly detect diseases with AI-powered analysis.",
    icon: PhotoIcon,
  },
  {
    title: "Crop Growth Recommendations",
    description:
      "Receive personalized crop growth recommendations to maximize yield.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Resource Locator Map",
    description:
      "Locate nearby resources like fertilizers, seeds, and equipment with ease.",
    icon: MapIcon,
  },
  {
    title: "Disaster Management",
    description:
      "Get timely alerts and actionable steps during natural disasters.",
    icon: ExclamationTriangleIcon,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-green-50 overflow-hidden">
      {/* Decorative background patches */}
      <motion.div
        className="absolute top-0 left-10 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-70"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-60"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Features Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 space-y-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900">
            Grow Smarter with Website Name
          </h2>
          <p className="mt-4 text-green-800/80 text-lg md:text-xl">
            Explore the powerful features designed to help farmers thrive
          </p>
        </motion.div>

        {/* Features List */}
        {features.map((feature, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center relative z-10 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-12`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Text */}
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-green-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-green-800/80 text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
