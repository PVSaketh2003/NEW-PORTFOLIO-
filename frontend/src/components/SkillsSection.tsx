import React from 'react';
import { Cpu, Eye, Server, Code2, Award, GraduationCap } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsProps> = ({ skillCategories }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Vision')) return Eye;
    if (category.includes('Edge') || category.includes('Hardware')) return Cpu;
    if (category.includes('Cloud') || category.includes('DevOps')) return Server;
    return Code2;
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Competencies & Skill Matrix
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Proficiencies across deep learning models, edge compute architectures, systems programming, and modern cloud deployment.
          </p>
        </div>

        {/* Skill Matrices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.category);
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-xl border border-slate-800"
              >
                <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className={`font-medium ${skill.highlight ? 'text-cyan-300' : 'text-slate-300'}`}>
                          {skill.name} {skill.highlight && '★'}
                        </span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-cyan-500 to-teal-400'
                              : 'bg-slate-700'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Certifications Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4 text-xs font-mono">
              <div>
                <div className="flex justify-between text-white font-semibold">
                  <span>B.Tech in Computer Science Engineering</span>
                  <span className="text-purple-400">CGPA: 9.33 / 10</span>
                </div>
                <div className="text-slate-400">SRM University, Chennai | 2021 – 2025</div>
              </div>
              <div className="border-t border-slate-800/60 pt-3">
                <div className="flex justify-between text-white font-semibold">
                  <span>12th Grade (Higher Secondary)</span>
                  <span className="text-cyan-400">98.17%</span>
                </div>
                <div className="text-slate-400">Taywade College, Nagpur | 2020 – 2021</div>
              </div>
              <div className="border-t border-slate-800/60 pt-3">
                <div className="flex justify-between text-white font-semibold">
                  <span>10th Grade (Secondary)</span>
                  <span className="text-emerald-400">93.8%</span>
                </div>
                <div className="text-slate-400">Bhawans Ashti, Nagpur | 2018 – 2019</div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-panel p-6 rounded-xl border border-slate-800">
            <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Certifications & Honors</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-mono">▸</span>
                <span><strong>Python for Computer Vision with OpenCV</strong> – Udemy</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-mono">▸</span>
                <span><strong>Exploratory Data Analysis with Python</strong> – Great Learning</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-mono">▸</span>
                <span><strong>Letter of Recommendation</strong> – Prodigy Infotech (Outstanding technical contribution in Machine Learning)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-amber-400 font-mono">▸</span>
                <span><strong>Published Research Author</strong> – International Conference on Computational Intelligence (ICCI)</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
