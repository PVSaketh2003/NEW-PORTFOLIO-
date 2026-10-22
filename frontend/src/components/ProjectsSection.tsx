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
    <section id="projects" className="py-16 lg:py-24 bg-theme-surface border-b border-theme-border transition-colors duration-300">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-theme-border">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase">
              ENGINEERING PORTFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
              Selected Engineering Work
            </h2>
            <p className="text-sm text-theme-secondary mt-1 max-w-xl">
              Real-world computer vision, Edge AI, and software systems built to solve practical problems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 mt-4 md:mt-0 bg-theme-bg p-1 rounded-lg border border-theme-border text-xs font-medium shadow-sm">
            {(['All', 'Featured', 'Commercial', 'Research'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-theme-card text-theme-text border border-theme-border shadow-sm font-semibold'
                    : 'text-theme-secondary hover:text-theme-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Card: VisionEye Spotlight */}
        {projects.find(p => p.id === 1) && (
          <div className="mb-12 rounded-xl bg-theme-card border border-theme-border p-6 lg:p-8 shadow-md hover:border-theme-borderHover transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-theme-accent">
                  <span className="font-semibold uppercase tracking-wider">FEATURED PLATFORM</span>
                  <span>·</span>
                  <span className="text-theme-secondary">Real-Time Foot-Traffic Analytics</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-theme-text">
                  VisionEye
                </h3>

                <p className="text-sm text-theme-secondary leading-relaxed">
                  A computer vision platform that detects and tracks people, counts entry and exit events, and supports occupancy and spatial analytics.
                </p>

                {/* Simplified Architecture Flow */}
                <div className="pt-2 pb-1">
                  <div className="text-[11px] font-mono text-theme-secondary mb-2 uppercase tracking-wide">
                    System Architecture Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {["Video Input", "Detection", "Tracking", "Entry/Exit Logic", "Analytics Dashboard"].map((step, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded bg-theme-elevated border border-theme-border text-theme-text font-medium shadow-xs">
                          {step}
                        </span>
                        {sIdx < arr.length - 1 && (
                          <span className="text-theme-muted text-xs">→</span>
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
                    <Github className="w-3.5 h-3.5 text-theme-secondary" />
                    <span>View Source Code</span>
                  </a>

                  <a
                    href="https://portfolio.pvsairamsaketh.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-theme-secondary hover:text-theme-accent transition-colors ml-1 font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Project</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Architectural Flow Diagram */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-lg bg-theme-elevated border border-theme-border space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] pb-2 border-b border-theme-border">
                    <span className="text-theme-text font-semibold uppercase">VisionEye Pipeline Execution</span>
                    <span className="text-theme-accentSec font-bold">Edge Capable</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded bg-theme-card border border-theme-border">
                      <div className="text-theme-accent font-semibold text-[11px]">1. INGESTION & INFERENCE</div>
                      <div className="text-[11px] text-theme-secondary mt-0.5">
                        Lightweight YOLO ONNX model detects targets on frame buffer without cloud round-trip.
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-theme-card border border-theme-border">
                      <div className="text-theme-accent font-semibold text-[11px]">2. MULTI-OBJECT TRACKING</div>
                      <div className="text-[11px] text-theme-secondary mt-0.5">
                        ByteTrack preserves tracklet IDs through temporary occlusions and trajectory crossovers.
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-theme-card border border-theme-border">
                      <div className="text-theme-accent font-semibold text-[11px]">3. 2D PERSPECTIVE MAPPING</div>
                      <div className="text-[11px] text-theme-secondary mt-0.5">
                        Planar homography converts camera pixel coordinates to floor plan bird's-eye occupancy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.filter(p => p.id !== 1).map((project) => (
            <div
              key={project.id}
              className="card-surface p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-theme-secondary mb-2">
                  <span className="text-theme-accent uppercase font-medium">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-theme-secondary text-[11px]">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                  {project.title}
                </h4>

                <div className="space-y-2 mt-3 text-xs sm:text-sm text-theme-secondary leading-relaxed">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx}>{desc}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-theme-border space-y-3">
                <div className="flex flex-wrap gap-1.5">
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
                      className="inline-flex items-center space-x-1 text-theme-secondary hover:text-theme-text transition-colors font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-theme-muted font-mono">Defense / Internal System</span>
                  )}

                  {project.modalDetails && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center space-x-1 text-theme-accent hover:text-theme-accentHover transition-colors font-medium"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-theme-card border border-theme-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-sm shadow-2xl animate-slide-up">
            <div className="flex items-start justify-between border-b border-theme-border pb-4">
              <div>
                <span className="text-xs font-mono text-theme-accent uppercase font-medium">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-theme-text mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded text-theme-secondary hover:text-theme-text hover:bg-theme-elevated transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedProject.modalDetails && (
              <div className="space-y-5 text-theme-secondary">
                <div>
                  <h4 className="text-xs font-mono uppercase text-theme-text font-semibold mb-1">
                    The Problem
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.modalDetails.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-theme-text font-semibold mb-1">
                    The Approach & Solution
                  </h4>
                  <p className="leading-relaxed">
                    {selectedProject.modalDetails.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-theme-text font-semibold mb-2">
                    System Architecture
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.modalDetails.architecture.map((arch, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-theme-accent">▸</span>
                        <span className="text-xs text-theme-text">{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                    <h5 className="text-[11px] font-mono text-theme-text uppercase mb-1 font-semibold">
                      Key Engineering Decisions
                    </h5>
                    <ul className="text-xs space-y-1">
                      {selectedProject.modalDetails.decisions.map((dec, i) => (
                        <li key={i} className="text-theme-secondary">· {dec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-lg bg-theme-elevated border border-theme-border">
                    <h5 className="text-[11px] font-mono text-theme-text uppercase mb-1 font-semibold">
                      Challenges & Trade-offs
                    </h5>
                    <ul className="text-xs space-y-1">
                      {selectedProject.modalDetails.challenges.map((ch, i) => (
                        <li key={i} className="text-theme-secondary">· {ch}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProject.modalDetails.futureWork && (
                  <div>
                    <h4 className="text-xs font-mono uppercase text-theme-text font-semibold mb-1">
                      Future Improvements
                    </h4>
                    <p className="text-xs leading-relaxed">
                      {selectedProject.modalDetails.futureWork}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-4 border-t border-theme-border flex justify-end">
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
