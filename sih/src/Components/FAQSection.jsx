import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; 
import faqImg from "../assets/faq.png"; 

const faqs = [
  {
    question: "How does the AI Query Chat help farmers?",
    answer:
      "Our AI-powered chat instantly answers farmers' queries, from crop diseases to soil advice, making guidance accessible anytime, anywhere.",
  },
  {
    question: "Can I get crop recommendations for my farm?",
    answer:
      "Yes! Based on soil type, weather, and local trends, our platform suggests the best crops to grow for maximum yield and profit.",
  },
  {
    question: "What is the Resource Locator tool?",
    answer:
      "The Resource Locator helps farmers find nearby markets, suppliers, equipment, and government resources quickly on an interactive map.",
  },
  {
    question: "How does the Disaster Management system work?",
    answer:
      "Our system monitors weather conditions and sends timely alerts with actionable advice to help farmers stay safe and reduce crop losses.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 px-6 lg:px-20 bg-white text-gray-800 overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-70"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-20 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content grid */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={faqImg}
            alt="Farmers FAQ"
            className="w-full max-w-md rounded-2xl shadow-lg relative z-10"
          />
        </motion.div>

        {/* Right side - FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <span className="inline-block text-sm uppercase tracking-wide text-green-900 font-semibold mb-2">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            We’ve Got the Answers You Need
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Here are some of the most common questions farmers ask about our
            platform and tools — explained in simple words.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md bg-white/80 backdrop-blur"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-green-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-green-600" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-4 text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
