import React from 'react';
import { initialSkillGroups } from '../data/fallbackData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-[#11151D] border-b border-[#273142]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#62C6F2] uppercase">
            TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] tracking-tight mt-1">
            Skills & Applied Technologies
          </h2>
          <p className="text-sm text-[#A4ADBB] mt-1 max-w-xl">
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
                <h3 className="text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider mb-4 font-mono pb-2 border-b border-[#273142] flex items-center justify-between">
                  <span>{group.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62C6F2]" />
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#0B0D12] border border-[#273142] text-xs font-medium text-[#F5F7FA] hover:border-[#62C6F2]/40 transition-colors"
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
