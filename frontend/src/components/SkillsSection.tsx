import React from 'react';
import { initialSkillGroups } from '../data/fallbackData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#151922] border-b border-[#2A3240]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F5F7] tracking-tight mt-1">
            Skills & Applied Technologies
          </h2>
          <p className="text-sm text-[#A6AFBD] mt-1 max-w-xl">
            Core toolchains, frameworks, embedded platforms, and programming languages applied across projects.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialSkillGroups.map((group, idx) => (
            <div
              key={idx}
              className="card-standard p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-semibold text-[#F3F5F7] uppercase tracking-wider mb-4 font-mono pb-2 border-b border-[#2A3240]">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#101216] border border-[#2A3240] text-xs font-medium text-[#F3F5F7] hover:border-[#55BFE5]/40 transition-colors"
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
