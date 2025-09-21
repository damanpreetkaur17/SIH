import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQSection from "./components/FAQSection";
import FarmerSay from "./components/FarmerSay";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <About />
      <FAQSection />
      <FarmerSay />
      <Footer />
    </div>
  );
}

export default App;
