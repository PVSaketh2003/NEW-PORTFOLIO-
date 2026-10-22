import React from 'react';
import { initialSkillGroups } from '../data/fallbackData';
import { Cpu, Terminal, Database, Wrench, Eye } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Computer Vision')) return Eye;
    if (category.includes('Edge AI')) return Cpu;
    if (category.includes('Machine Learning')) return Database;
    if (category.includes('Programming')) return Terminal;
    return Wrench;
  };

  return (
    <section id="skills" className="py-16 lg:py-24 bg-theme-surface border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
            <span>04 · SKILLS & TECH STACKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Technical Competencies & Engineering Stacks
          </h2>
          <p className="text-sm text-theme-secondary mt-1 max-w-2xl">
            Verified frameworks, embedded architectures, optimization tools, and programming languages applied across professional defense systems and research.
          </p>
        </div>

        {/* Categorized Skills Grid (No arbitrary percentage bars or fake ratings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialSkillGroups.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={idx}
                className="card-surface p-6 flex flex-col justify-between hover:border-theme-accent/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-theme-border">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-1.5 rounded-lg bg-theme-elevated border border-theme-border text-theme-accent group-hover:border-theme-accent/50 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-theme-text tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-theme-secondary">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-theme-elevated border border-theme-border text-xs font-medium text-theme-text hover:border-theme-accent/60 hover:text-theme-accent hover:bg-theme-interactive transition-all duration-200 cursor-default shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-theme-border text-[11px] font-mono text-slate-600 dark:text-slate-400 font-medium flex items-center justify-between">
                  <span>Verified Resume Toolchain</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-theme-accent group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
