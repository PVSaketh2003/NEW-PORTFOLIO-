import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { initialInternships } from '../data/fallbackData';

export const InternshipsSection: React.FC = () => {
  return (
    <section id="internships" className="py-16 lg:py-24 bg-theme-bg border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
            <span>03 · INTERNSHIPS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Engineering & Machine Learning Internships
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-2xl">
            Early career internships spanning cloud backend development, product QA automation, data analytics mentorship, and supervised machine learning.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialInternships.map((internship) => (
            <div
              key={internship.id}
              className="card-surface p-6 flex flex-col justify-between hover:border-theme-accent/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header: Role & Organization */}
                <div className="flex items-start justify-between gap-2 border-b border-theme-border pb-3 mb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                      {internship.role}
                    </h3>
                    <div className="text-sm font-semibold text-theme-accent">
                      {internship.company}
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1 font-mono text-xs text-theme-secondary">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-theme-elevated border border-theme-border font-medium text-theme-text">
                      <Calendar className="w-3 h-3 text-theme-accent" />
                      <span>{internship.duration}</span>
                    </span>
                    <span className="inline-flex items-center space-x-1 text-[11px] text-theme-muted">
                      <MapPin className="w-3 h-3" />
                      <span>{internship.location}</span>
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                {internship.summary && (
                  <p className="text-xs sm:text-sm text-theme-secondary mb-3 leading-relaxed">
                    {internship.summary}
                  </p>
                )}

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-4 text-xs text-theme-secondary leading-relaxed">
                  {internship.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional Award / Recommendation Badge */}
                {internship.award && (
                  <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-theme-elevated border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{internship.award}</span>
                  </div>
                )}
              </div>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border">
                {internship.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-theme-elevated border border-theme-border text-[11px] font-mono text-theme-text"
                  >
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

export default InternshipsSection;
