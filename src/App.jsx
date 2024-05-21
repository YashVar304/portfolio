import { useState } from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectSlider from "./components/ProjectSlider";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectSlider />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </Router>
  );
}

export default App;
