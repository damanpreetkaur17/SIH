import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages / Components
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import FAQSection from "./components/FAQSection";
import FarmerSay from "./components/FarmerSay";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage"; 

// Optional: Landing page combining all sections
const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <FAQSection />
    <FarmerSay />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
