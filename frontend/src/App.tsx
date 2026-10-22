import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DefenseUAVSection } from './components/DefenseUAVSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveCVDemo } from './components/InteractiveCVDemo';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { getProfile, getExperiences, getProjects, getSkills } from './services/api';
import { Profile, Experience, Project, SkillCategory } from './types';
import { initialProfile, initialExperiences, initialProjects, initialSkills } from './data/fallbackData';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [skills, setSkills] = useState<SkillCategory[]>(initialSkills);

  useEffect(() => {
    // Hydrate from live backend API if available
    const fetchData = async () => {
      try {
        const [p, e, pr, s] = await Promise.all([
          getProfile(),
          getExperiences(),
          getProjects(),
          getSkills(),
        ]);
        if (p) setProfile(p);
        if (e && e.length > 0) setExperiences(e);
        if (pr && pr.length > 0) setProjects(pr);
        if (s && s.length > 0) setSkills(s);
      } catch (err) {
        console.warn('API fetch fell back to static resume dataset:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero profile={profile} />
        <DefenseUAVSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <InteractiveCVDemo />
        <SkillsSection skillCategories={skills} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
