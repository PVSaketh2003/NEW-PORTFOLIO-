import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, X, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'All' | 'Commercial Vision' | 'Edge AI' | 'Research'>('All');

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Commercial Vision') return p.category.includes('Commercial') || p.category.includes('Vision') || p.category.includes('Safety') || p.category.includes('Platform');
    if (activeTab === 'Edge AI') return p.category.includes('Edge') || p.category.includes('Biometrics');
    if (activeTab === 'Research') return p.category.includes('Research');
    return true;
  });

  const featuredProject = projects.find((p) => p.isFeatured);
  const regularProjects = filteredProjects.filter((p) => p.id !== (activeTab === 'All' && featuredProject ? featuredProject.id : 0));

  return (
    <section id="projects" className="py-16 lg:py-24 bg-theme-bg border-b border-theme-border transition-colors duration-300 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-theme-border gap-4">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
              <span>05 · COMMERCIAL & RESEARCH PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
              Commercial Computer Vision Systems & Research
            </h2>
            <p className="text-sm text-theme-secondary mt-1 max-w-xl">
              Production-deployed industrial safety, automated quality control, edge biometric systems, and peer-reviewed research publications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 bg-theme-surface p-1 rounded-xl border border-theme-border text-xs font-medium shadow-xs">
            {(['All', 'Commercial Vision', 'Edge AI', 'Research'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-theme-card text-theme-accent border border-theme-border shadow-xs font-semibold'
                    : 'text-theme-secondary hover:text-theme-text'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Spotlight: VisionEye */}
        {featuredProject && (activeTab === 'All' || activeTab === 'Commercial Vision') && (
          <div className="mb-12 rounded-2xl bg-theme-card border border-theme-border p-6 sm:p-8 lg:p-10 shadow-lg hover:border-theme-accent/50 transition-all duration-300 relative overflow-hidden group">
            
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-theme-accent via-sky-400 to-theme-accentSec" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-theme-accent">
                  <span className="font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FEATURED COMPUTER VISION PLATFORM</span>
                  </span>
                  <span>·</span>
                  <span className="text-theme-secondary">{featuredProject.tagline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-theme-secondary leading-relaxed">
                  A high-throughput computer vision analytics platform engineered with lightweight YOLO26n ONNX models and ByteTrack. 
                  Calculates bidirectional entry and exit crossings, real-time occupancy limits, and 2D planar bird's-eye perspective maps.
                </p>

                {/* Architecture Pipeline Flow */}
                <div className="pt-2 pb-1">
                  <div className="text-[11px] font-mono text-theme-secondary mb-2 uppercase tracking-wider font-semibold">
                    System Architecture Pipeline:
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {featuredProject.architectureSteps?.map((step, sIdx, arr) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded-md bg-theme-elevated border border-theme-border text-theme-text font-medium shadow-xs">
                          {step}
                        </span>
                        {sIdx < arr.length - 1 && (
                          <span className="text-theme-accent text-xs font-bold">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredProject.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="badge-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                {featuredProject.githubUrl && (
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center gap-2 group/btn"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-theme-accent" />
                      <span>View GitHub Repository</span>
                      <ExternalLink className="w-3.5 h-3.5 text-theme-secondary transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Side: Architectural Telemetry Visual */}
              <div className="lg:col-span-5">
                <div className="p-5 rounded-xl bg-theme-surface border border-theme-border shadow-inner space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                    <span className="font-semibold text-theme-text flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>VisionEye Real-Time Telemetry</span>
                    </span>
                    <span className="text-[10px] text-theme-accent bg-theme-elevated px-2 py-0.5 rounded border border-theme-border">
                      30+ FPS
                    </span>
                  </div>

                  <div className="space-y-2.5 text-[11px]">
                    <div className="flex justify-between py-1 border-b border-theme-border/60">
                      <span className="text-theme-secondary">Inference Engine:</span>
                      <span className="text-theme-text font-semibold">YOLO26n ONNX FP16</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-theme-border/60">
                      <span className="text-theme-secondary">Multi-Target Tracker:</span>
                      <span className="text-theme-text font-semibold">ByteTrack Kalman Filter</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-theme-border/60">
                      <span className="text-theme-secondary">Spatial Projection:</span>
                      <span className="text-theme-text font-semibold">2D Planar Homography</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-theme-border/60">
                      <span className="text-theme-secondary">Communication:</span>
                      <span className="text-theme-text font-semibold">Django Channels WebSockets</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-theme-secondary">Deployment:</span>
                      <span className="text-theme-text font-semibold">Docker · Nginx SSL/TLS</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-theme-elevated border border-theme-border text-center text-[11px] text-theme-secondary leading-snug">
                    <span className="text-theme-accent font-semibold block mb-0.5">Privacy-First Architecture</span>
                    Zero raw facial imagery recorded. Real-time bounding box vectors streamed via WebSockets.
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Regular Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="card-surface p-6 flex flex-col justify-between hover:border-theme-accent/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme-border">
                  <span className="text-[10px] font-mono text-theme-accent uppercase bg-theme-elevated px-2 py-0.5 rounded border border-theme-border font-medium">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-medium truncate max-w-[140px]">
                      {project.metrics}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-theme-text group-hover:text-theme-accent transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-theme-secondary mb-3 leading-relaxed">
                  {project.description[0]}
                </p>

                {/* Additional bullet if available */}
                {project.description[1] && (
                  <p className="text-xs text-theme-secondary/80 mb-4 leading-relaxed">
                    {project.description[1]}
                  </p>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="badge-tag text-[10px] py-0.5 px-2">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-medium self-center">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-1">
                  {project.architectureSteps ? (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-theme-accent hover:underline flex items-center gap-1 group/btn"
                    >
                      <span>Architecture Details</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  ) : (
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">Resume Verified</span>
                  )}

                  <div className="flex items-center space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-theme-secondary hover:text-theme-text transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive System Architecture Modal */}
      {selectedProject && selectedProject.modalDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-theme-card border border-theme-border shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-theme-border">
              <div>
                <span className="text-[11px] font-mono text-theme-accent uppercase">
                  SYSTEM ARCHITECTURE BREAKDOWN
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-theme-text mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-theme-secondary hover:text-theme-text hover:bg-theme-elevated transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm text-theme-secondary">
              
              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-theme-surface border border-theme-border">
                  <h4 className="text-xs font-mono uppercase text-theme-text font-bold mb-1.5">
                    Problem Statement
                  </h4>
                  <p className="text-xs leading-relaxed">
                    {selectedProject.modalDetails.problem}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-theme-surface border border-theme-border">
                  <h4 className="text-xs font-mono uppercase text-theme-accent font-bold mb-1.5">
                    Engineering Solution
                  </h4>
                  <p className="text-xs leading-relaxed">
                    {selectedProject.modalDetails.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Steps */}
              <div>
                <h4 className="text-xs font-mono uppercase text-theme-text font-bold mb-3">
                  Pipeline Implementation Details
                </h4>
                <ul className="space-y-2 text-xs">
                  {selectedProject.modalDetails.architecture.map((step, idx) => (
                    <li key={idx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-theme-elevated border border-theme-border">
                      <span className="text-theme-accent font-mono font-bold mt-0.5">{idx + 1}.</span>
                      <span className="text-theme-text">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Decisions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="text-xs font-mono uppercase text-theme-text font-bold mb-2">
                    Key Challenges
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {selectedProject.modalDetails.challenges.map((c, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-theme-accent mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-theme-text font-bold mb-2">
                    Architectural Decisions
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {selectedProject.modalDetails.decisions.map((d, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <span className="text-theme-accent mt-0.5">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
                  PV Sairam Saketh Portfolio
                </span>
                <div className="flex items-center space-x-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-1.5 px-3"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ProjectsSection;
