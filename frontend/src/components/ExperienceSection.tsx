import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#101216] border-b border-[#2A3240]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
            CAREER TRAJECTORY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F5F7] tracking-tight mt-1">
            Professional Experience & Engineering History
          </h2>
          <p className="text-sm text-[#A6AFBD] mt-1 max-w-xl">
            Track record across defense UAV edge AI, industrial plant automation, and distributed software systems.
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="card-standard p-6 lg:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#2A3240] pb-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#F3F5F7]">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-[#55BFE5] mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#A6AFBD] font-mono">
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
                <p className="text-sm text-[#F3F5F7] mb-4 font-medium leading-relaxed">
                  {exp.summary}
                </p>
              )}

              {/* Technical Contributions */}
              <ul className="space-y-2 mb-5 text-xs sm:text-sm text-[#A6AFBD] leading-relaxed">
                {exp.highlights.map((item, hIdx) => {
                  const parts = item.split(': ');
                  const hasCategory = parts.length > 1;
                  return (
                    <li key={hIdx} className="flex items-start space-x-2">
                      <span className="text-[#55BFE5] mt-1 text-xs">▸</span>
                      <span>
                        {hasCategory ? (
                          <>
                            <strong className="text-[#F3F5F7] font-semibold">{parts[0]}:</strong>{' '}
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
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2A3240]/60">
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
