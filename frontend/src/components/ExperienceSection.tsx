import React from 'react';
import { Calendar, MapPin, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-theme-surface border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
            <span>02 · PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Engineering Career & Defense Systems History
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-2xl">
            Verified full-time professional experience delivering mission-critical edge AI for UAV defense and industrial plant automation.
          </p>
        </div>

        {/* Professional Experience Stack */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-surface p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-accent via-sky-400 to-theme-accentSec" />

              {/* Header: Role, Company, Location, Duration */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-theme-border pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-mono text-theme-accent font-semibold uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{exp.division || "Defense UAV & Industrial Systems"}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-theme-text">
                    {exp.role}
                  </h3>
                  <div className="text-base font-semibold text-theme-accent mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-theme-secondary">
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-theme-elevated border border-theme-border">
                    <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                    <span className="font-semibold text-theme-text">{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-theme-elevated border border-theme-border">
                    <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              {exp.summary && (
                <div className="mb-6 p-4 rounded-xl bg-theme-elevated/70 border border-theme-border text-sm text-theme-text leading-relaxed">
                  <strong className="text-theme-accent font-semibold block text-xs uppercase font-mono mb-1">
                    Role Mission & Scope:
                  </strong>
                  {exp.summary}
                </div>
              )}

              {/* Detailed Responsibilities & Verified Accomplishments */}
              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono uppercase text-theme-secondary font-semibold tracking-wider flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Key Engineering Contributions & System Deployments:</span>
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-theme-secondary leading-relaxed">
                  {exp.highlights.map((item, hIdx) => {
                    const parts = item.split(': ');
                    const hasCategory = parts.length > 1;
                    return (
                      <li key={hIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-theme-accent mt-0.5 flex-shrink-0" />
                        <span>
                          {hasCategory ? (
                            <>
                              <strong className="text-theme-text font-semibold">{parts[0]}:</strong>{' '}
                              <span>{parts.slice(1).join(': ')}</span>
                            </>
                          ) : (
                            item
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-theme-border">
                <div className="text-[11px] font-mono text-theme-secondary uppercase tracking-wider mb-2 font-medium">
                  Technologies & Hardware Toolchain:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md bg-theme-elevated border border-theme-border text-xs font-mono text-theme-text hover:border-theme-accent/50 hover:text-theme-accent transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
