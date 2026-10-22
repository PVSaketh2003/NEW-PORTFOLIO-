import React from 'react';
import { BookOpen, GraduationCap, Award } from 'lucide-react';
import { initialResearch, initialEducation, initialCertifications } from '../data/fallbackData';

export const ResearchEducationSection: React.FC = () => {
  return (
    <section id="research" className="py-16 lg:py-24 bg-[#101216] border-b border-[#2A3240]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Research & Publications */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
                ACADEMIC CONTRIBUTIONS
              </div>
              <h2 className="text-2xl font-bold text-[#F3F5F7] tracking-tight mt-1 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-[#55BFE5]" />
                <span>Research & Publications</span>
              </h2>
            </div>

            <div className="card-standard p-6 space-y-4">
              <div>
                <span className="text-[11px] font-mono text-[#55BFE5] uppercase bg-[#151922] px-2 py-0.5 rounded border border-[#2A3240]">
                  Peer-Reviewed Conference Paper
                </span>
                <h3 className="text-base font-bold text-[#F3F5F7] mt-2">
                  {initialResearch.title}
                </h3>
                <div className="text-xs text-[#A6AFBD] font-mono mt-1">
                  {initialResearch.venue}
                </div>
                <div className="text-[11px] text-[#A6AFBD]">
                  {initialResearch.institution}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A6AFBD] leading-relaxed">
                {initialResearch.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#2A3240]/60">
                {initialResearch.topics.map((t, idx) => (
                  <span key={idx} className="badge-tag text-[10px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications Block */}
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-[#F3F5F7] uppercase tracking-wider mb-4 font-mono flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#55BFE5]" />
                <span>Verified Certifications</span>
              </h3>

              <div className="space-y-3">
                {initialCertifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#151922] border border-[#2A3240] text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#F3F5F7]">{cert.title}</span>
                      <span className="font-mono text-[10px] text-[#55BFE5]">{cert.issuer}</span>
                    </div>
                    <div className="text-[#A6AFBD] mt-0.5 text-[11px] leading-relaxed">
                      {cert.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-[#55BFE5] uppercase">
                ACADEMIC BACKGROUND
              </div>
              <h2 className="text-2xl font-bold text-[#F3F5F7] tracking-tight mt-1 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-[#55BFE5]" />
                <span>Education</span>
              </h2>
            </div>

            <div className="space-y-4">
              {initialEducation.map((edu, idx) => (
                <div key={idx} className="card-standard p-6 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-base font-bold text-[#F3F5F7]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-[#55BFE5] font-semibold">
                      {edu.score}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#A6AFBD] font-mono">
                    <span>{edu.institution}</span>
                    <span>{edu.duration}</span>
                  </div>

                  <p className="text-xs text-[#A6AFBD] pt-1 leading-relaxed">
                    {edu.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
