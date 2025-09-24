import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Farmer1 from "../assets/Farmer1.png";
import Farmer2 from "../assets/Farmer2.png";
import Farmer3 from "../assets/Farmer3.png";

const testimonials = [
  {
    name: "Slamet",
    role: "Rice Farmer — Punjab",
    image: Farmer1,
    quote:
      "Since using the platform, I’ve saved time and increased my harvest. The tools are easy to use, even for someone like me who’s not tech-savvy.",
  },
  {
    name: "Aarti",
    role: "Vegetable Farmer — Maharashtra",
    image: Farmer2,
    quote:
      "The crop recommendation system helped me choose better crops for my soil type. My income has improved noticeably!",
  },
  {
    name: "John",
    role: "Corn Farmer — Kenya",
    image: Farmer3,
    quote:
      "I receive timely weather alerts which protect my crops from disaster. This platform is a blessing for farmers like me.",
  },
];

const FarmersCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section id="reviews" className="relative bg-green-950 text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Floating Patches */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-green-800/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-600/20 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-700/20 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <span className="bg-green-800/40 text-green-200 text-sm py-1 px-4 rounded-full">
          What Farmers Say
        </span>
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Voices from the Fields
        </motion.h2>

        {/* Testimonial Carousel */}
        <div className="relative mt-12 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center 
                         bg-green-900/90 p-8 md:p-12 rounded-3xl shadow-2xl max-w-5xl w-full gap-8 hover:scale-105 transition-transform duration-300"
            >
              <motion.img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-green-700 shadow-lg"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              />
              <div className="text-left flex-1">
                <blockquote className="text-lg md:text-xl text-gray-200 italic leading-relaxed">
                  “{testimonials[index].quote}”
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-white text-lg">
                    {testimonials[index].name}
                  </p>
                  <p className="text-sm text-green-300">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-green-800 hover:bg-green-700 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-lime-400 text-green-950 hover:bg-lime-500 transition"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmersCarousel;
