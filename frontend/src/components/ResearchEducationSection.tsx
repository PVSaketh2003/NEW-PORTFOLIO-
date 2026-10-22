import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import { initialResearch, initialEducation, initialCertifications } from '../data/fallbackData';

export const ResearchEducationSection: React.FC = () => {
  return (
    <section id="research" className="py-16 lg:py-24 bg-theme-surface border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Research & Publications & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
                <span>06 · RESEARCH & PUBLICATIONS</span>
              </div>
              <h2 className="text-2xl font-bold text-theme-text tracking-tight mt-1 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-theme-accent" />
                <span>Academic Publications</span>
              </h2>
            </div>

            {/* Publication Card */}
            <div className="card-surface p-6 space-y-4 hover:border-theme-accent/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-mono text-theme-accent uppercase bg-theme-elevated px-2.5 py-1 rounded-md border border-theme-border font-semibold">
                  Peer-Reviewed Conference Paper
                </span>
                <span className="text-xs font-mono text-theme-muted">
                  ICCI
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-theme-text leading-snug">
                  {initialResearch.title}
                </h3>
                <div className="text-xs text-theme-accent font-mono mt-1 font-medium">
                  {initialResearch.venue}
                </div>
                <div className="text-[11px] text-theme-secondary mt-0.5">
                  {initialResearch.institution}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-theme-secondary leading-relaxed">
                {initialResearch.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border">
                {initialResearch.topics.map((t, idx) => (
                  <span key={idx} className="badge-tag text-[10px] py-0.5 px-2">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div className="pt-4 space-y-4">
              <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono flex items-center space-x-2 pb-2 border-b border-theme-border">
                <Award className="w-4 h-4 text-theme-accent" />
                <span>Verified Certifications & Accreditations</span>
              </h3>

              <div className="space-y-3">
                {initialCertifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border hover:border-theme-accent/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-theme-text">{cert.title}</span>
                      <span className="font-mono text-[10px] text-theme-accent font-semibold px-2 py-0.5 rounded bg-theme-card border border-theme-border">
                        {cert.issuer}
                      </span>
                    </div>
                    <div className="text-theme-secondary mt-1 text-xs leading-relaxed">
                      {cert.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
                <span>07 · ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-2xl font-bold text-theme-text tracking-tight mt-1 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-theme-accent" />
                <span>Education</span>
              </h2>
            </div>

            <div className="space-y-4">
              {initialEducation.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="card-surface p-6 space-y-2.5 hover:border-theme-accent/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-theme-border pb-2.5">
                    <h3 className="text-base font-bold text-theme-text">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-theme-accent font-bold px-2 py-0.5 rounded bg-theme-elevated border border-theme-border">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-theme-secondary font-mono">
                    <span className="font-semibold text-theme-text">{edu.institution}</span>
                    <span>{edu.duration}</span>
                  </div>

                  <p className="text-xs text-theme-secondary pt-1 leading-relaxed">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResearchEducationSection;
