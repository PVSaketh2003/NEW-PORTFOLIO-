import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalSummary } from './components/ProfessionalSummary';
import { ExperienceSection } from './components/ExperienceSection';
import { InternshipsSection } from './components/InternshipsSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
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
        console.warn('Using verified resume static dataset:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text flex flex-col font-sans transition-colors duration-300 selection:bg-theme-accent selection:text-theme-accentText">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 1. Professional Summary */}
        <ProfessionalSummary />

        {/* 2. Professional Experience (Solar Industries India Limited) */}
        <ExperienceSection experiences={experiences} />

        {/* 3. Internships (Tessell, Rise 11, Coding Raja, Prodigy Infotech) */}
        <InternshipsSection />

        {/* 4. Skills & Tech Stacks (5 Categorized Groups) */}
        <SkillsSection />

        {/* 5. Projects (Resume Verified: VisionEye, Heart Disease, Bank Loan, Vehicle Fraud) */}
        <ProjectsSection projects={projects} />

        {/* 6. Education, Research & Certifications */}
        <ResearchEducationSection />

        {/* 7. Contact (Django REST API + SMTP) */}
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
