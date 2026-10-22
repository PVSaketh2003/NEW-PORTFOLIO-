import React from 'react';
import { initialSkillGroups } from '../data/fallbackData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-theme-surface border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase">
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Skills & Applied Technologies
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-xl">
            Core toolchains, frameworks, embedded platforms, and programming languages applied across projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialSkillGroups.map((group, idx) => (
            <div
              key={idx}
              className="card-surface p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-theme-text uppercase tracking-wider mb-4 font-mono pb-2 border-b border-theme-border flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-2 h-2 rounded-full bg-theme-accent" />
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-theme-elevated border border-theme-border text-xs font-medium text-theme-text hover:border-theme-accent/50 hover:text-theme-accent transition-all duration-200 shadow-xs"
                    >
                      {skill}
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
