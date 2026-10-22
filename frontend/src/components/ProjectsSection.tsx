import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'Featured' | 'Commercial' | 'Research'>('All');

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Featured') return p.isFeatured;
    if (activeTab === 'Commercial') return p.category.includes('Commercial') || p.category.includes('Quality');
    if (activeTab === 'Research') return p.category.includes('Research') || p.category.includes('Machine Learning');
    return true;
  });

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#11151D] border-b border-[#273142]/60">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#273142]">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-[#62C6F2] uppercase">
              PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] tracking-tight mt-1">
              Selected Engineering Work
            </h2>
            <p className="text-sm text-[#A4ADBB] mt-1 max-w-xl">
              Real-world computer vision, Edge AI, and software systems built to solve practical problems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 mt-4 md:mt-0 bg-[#0B0D12] p-1 rounded-lg border border-[#273142] text-xs font-medium">
            {(['All', 'Featured', 'Commercial', 'Research'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-[#151B26] text-[#F5F7FA] border border-[#273142]'
                    : 'text-[#A4ADBB] hover:text-[#F5F7FA]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card: VisionEye Spotlight */}
        {projects.find(p => p.id === 1) && (
          <div className="mb-12 rounded-xl bg-[#151B26] border border-[#273142] p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#62C6F2]">
                  <span>FEATURED PLATFORM</span>
                  <span>·</span>
                  <span className="text-[#A4ADBB]">Real-Time Foot-Traffic Analytics</span>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F7FA]">
                  VisionEye
                </h3>

                <p className="text-sm text-[#A4ADBB] leading-relaxed">
                  A computer vision platform that detects and tracks people, counts entry and exit events, and supports occupancy and spatial analytics.
                </p>

                {/* Simplified Architecture Flow */}
                <div className="pt-2 pb-1">
                  <div className="text-[11px] font-mono text-[#A4ADBB] mb-2 uppercase tracking-wide">
                    System Architecture Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {["Video Input", "Detection", "Tracking", "Entry/Exit Logic", "Analytics Dashboard"].map((step, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded bg-[#0B0D12] border border-[#273142] text-[#F5F7FA]">
                          {step}
                        </span>
                        {sIdx < arr.length - 1 && (
                          <span className="text-[#A4ADBB] text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["YOLO26n ONNX", "ByteTrack", "OpenCV", "React", "Django REST Framework", "Django Channels", "WebSockets", "Docker"].map((tech, tIdx) => (
                    <span key={tIdx} className="badge-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setSelectedProject(projects.find(p => p.id === 1) || null)}
                    className="btn-primary text-xs"
                  >
                    <span>View Architecture & Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="https://github.com/PVSaketh2003/In-out-Project-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <Github className="w-3.5 h-3.5 text-[#A4ADBB]" />
                    <span>View Source Code</span>
                  </a>

                  <a
                    href="https://pvsairamsaketh.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-[#62C6F2] hover:text-[#79D1F5] transition-colors ml-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Project</span>
                  </a>
                </div>
              </div>

              {/* Right column: Schematic diagram illustration */}
              <div className="lg:col-span-5 bg-[#0B0D12] p-5 rounded-lg border border-[#273142] text-xs font-mono text-[#A4ADBB] space-y-3">
                <div className="text-[#F5F7FA] font-semibold text-xs border-b border-[#273142] pb-2 flex items-center justify-between">
                  <span>VisionEye Pipeline Execution</span>
                  <span className="text-[10px] text-[#7CE0C3]">Edge Capable</span>
                </div>
                <div className="space-y-2 text-[11px]">
                  <div className="p-2 rounded bg-[#151B26] border border-[#273142]">
                    <span className="text-[#62C6F2] block">1. INGESTION & INFERENCE</span>
                    Lightweight YOLO ONNX model detects targets on frame buffer without cloud round-trip.
                  </div>
                  <div className="p-2 rounded bg-[#151B26] border border-[#273142]">
                    <span className="text-[#62C6F2] block">2. MULTI-OBJECT TRACKING</span>
                    ByteTrack preserves tracklet IDs through temporary occlusions and trajectory crossovers.
                  </div>
                  <div className="p-2 rounded bg-[#151B26] border border-[#273142]">
                    <span className="text-[#62C6F2] block">3. 2D PERSPECTIVE MAPPING</span>
                    Planar homography converts camera pixel coordinates to floor plan bird's-eye occupancy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Responsive Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.filter(p => p.id !== 1).map((project) => (
            <div
              key={project.id}
              className="card-surface p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-[#62C6F2] text-[11px]">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[#A4ADBB] font-mono text-[10px]">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-[#F5F7FA] mb-1.5">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A4ADBB] mb-3 leading-relaxed">
                  {project.tagline}
                </p>

                <ul className="space-y-1.5 mb-4 text-xs text-[#A4ADBB]">
                  {project.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-1.5">
                      <span className="text-[#62C6F2] mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-[#273142]/60">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="badge-tag text-[10px] py-0.5 px-2">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#A4ADBB] hover:text-[#F5F7FA] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-[#788396] font-mono">Defense / Internal System</span>
                  )}

                  {project.modalDetails && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1 text-[#62C6F2] hover:text-[#79D1F5] transition-colors font-medium"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#151B26] border border-[#273142] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-sm shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#273142] pb-4">
              <div>
                <span className="text-xs font-mono text-[#62C6F2] uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-[#F5F7FA] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded text-[#A4ADBB] hover:text-[#F5F7FA] hover:bg-[#11151D]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedProject.modalDetails && (
              <div className="space-y-5 text-[#A4ADBB]">
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#F5F7FA] font-semibold mb-1">
                    The Problem
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.modalDetails.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#F5F7FA] font-semibold mb-1">
                    The Approach & Solution
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.modalDetails.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-[#F5F7FA] font-semibold mb-2">
                    System Architecture
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.modalDetails.architecture.map((arch, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#62C6F2]">▸</span>
                        <span className="text-xs text-[#F5F7FA]">{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded bg-[#11151D] border border-[#273142]">
                    <h5 className="text-[11px] font-mono text-[#F5F7FA] uppercase mb-1">
                      Key Engineering Decisions
                    </h5>
                    <ul className="text-xs space-y-1">
                      {selectedProject.modalDetails.decisions.map((dec, i) => (
                        <li key={i} className="text-[#A4ADBB]">· {dec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded bg-[#11151D] border border-[#273142]">
                    <h5 className="text-[11px] font-mono text-[#F5F7FA] uppercase mb-1">
                      Challenges & Trade-offs
                    </h5>
                    <ul className="text-xs space-y-1">
                      {selectedProject.modalDetails.challenges.map((ch, i) => (
                        <li key={i} className="text-[#A4ADBB]">· {ch}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProject.modalDetails.futureWork && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#F5F7FA] font-semibold mb-1">
                      Future Improvements
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.modalDetails.futureWork}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 border-t border-[#273142] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-secondary text-xs"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
