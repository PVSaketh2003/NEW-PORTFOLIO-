import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-theme-bg border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase">
            CAREER TRAJECTORY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Professional Experience & Engineering History
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-xl">
            Track record across defense UAV edge AI, industrial plant automation, and distributed software systems.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-surface p-6 lg:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-theme-border pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-theme-text">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-theme-accent mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-theme-secondary font-mono">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {exp.summary && (
                <p className="text-sm text-theme-text mb-4 font-medium leading-relaxed">
                  {exp.summary}
                </p>
              )}

              {/* Technical Contributions */}
              <ul className="space-y-2 mb-5 text-xs sm:text-sm text-theme-secondary leading-relaxed">
                {exp.highlights.map((item, hIdx) => {
                  const parts = item.split(': ');
                  const hasCategory = parts.length > 1;
                  return (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-theme-accent mt-1 text-xs">▸</span>
                      <span>
                        {hasCategory ? (
                          <>
                            <strong className="text-theme-text font-semibold">{parts[0]}:</strong>{' '}
                            {parts.slice(1).join(': ')}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="badge-tag text-[10px] py-0.5 px-2">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
