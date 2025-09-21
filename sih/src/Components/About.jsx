import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from '../assets/about.png'; 

const AgricultureSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-[#0b1f0b] via-[#123012] to-[#081908] text-white"
    >
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-10 left-0 w-72 h-72 bg-green-700/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm border px-3 py-1 rounded-full border-green-400/40 mb-4 text-green-300">
            Farming Made Smarter
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6 text-green-100">
            Bringing <br />
            Technology <br />
            to Agriculture
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-green-100 text-2xl mb-6">
            We are on a mission to empower farmers and agribusinesses with smart,
            practical solutions that help them grow stronger, work more
            efficiently, and build a more resilient future for agriculture.
          </p>
        </motion.div>
      </div>

      {/* Image and Cards */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-16">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-lg md:row-span-2"
        >
          <img
            src={aboutImg}
            alt="Farmers in the field"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Card 1 - AI Query Chat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-green-800/70 p-6 rounded-2xl flex flex-col justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-green-300">Smarter Help, Anytime</h3>
          <p className="text-green-100 mt-2">
            Our <span className="font-semibold text-white">AI Query Chat</span> answers farmer
            questions instantly — making agriculture guidance as easy as starting a conversation.
          </p>
        </motion.div>

        {/* Card 2 - Crop Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-green-700/70 p-6 rounded-2xl flex flex-col justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-green-300">Grow the Right Crops</h3>
          <p className="text-green-100 mt-2">
            With <span className="font-semibold text-white">AI-powered crop recommendations</span>,
            farmers choose what’s best for their soil, climate, and future profits.
          </p>
        </motion.div>

        {/* Card 3 - Resource Locator & Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-green-700/70 p-6 rounded-2xl flex flex-col justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-green-300">Everything in One Place</h3>
          <p className="text-green-100 mt-2">
            From <span className="font-semibold text-white">tracking crops</span> to locating essential
            resources nearby, we make farming simpler, smarter, and more connected.
          </p>
        </motion.div>

        {/* Card 4 - Disaster Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-green-700/70 p-6 rounded-2xl flex flex-col justify-center shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
        >
          <h3 className="text-2xl font-bold text-green-300">Prepared for Tomorrow</h3>
          <p className="text-green-100 mt-2">
            Our <span className="font-semibold text-white">disaster management system</span> alerts and guides
            farmers during floods, droughts, and emergencies — keeping farming resilient.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgricultureSection;
