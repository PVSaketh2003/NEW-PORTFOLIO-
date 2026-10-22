import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ResearchEducationSection } from './components/ResearchEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { getExperiences, getProjects } from './services/api';
import { Experience, Project } from './types';
import { initialExperiences, initialProjects } from './data/fallbackData';

export const AppContent: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [e, pr] = await Promise.all([
          getExperiences(),
          getProjects(),
        ]);
        if (e && e.length > 0) setExperiences(e);
        if (pr && pr.length > 0) setProjects(pr);
      } catch (err) {
        console.warn('Using verified static dataset:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text flex flex-col font-sans transition-colors duration-300 selection:bg-theme-accent selection:text-theme-accentText">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection />
        <ResearchEducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
