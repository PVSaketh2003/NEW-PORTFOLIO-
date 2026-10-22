import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Engineering Leadership
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            From defense-grade UAV computer vision to distributed cloud systems and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-slate-700 before:to-transparent">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative flex items-center md:justify-between group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Card Container */}
                <div
                  className={`w-full ml-12 md:ml-0 md:w-[46%] ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="glass-panel glass-panel-hover p-6 rounded-xl border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                        {exp.company}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">
                      {exp.role}
                    </h3>

                    {exp.division && (
                      <div className="text-xs font-mono text-teal-300 mb-3 flex items-center space-x-1">
                        <span>// {exp.division}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-1 text-xs text-slate-400 mb-4 font-mono">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-[10px] font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
