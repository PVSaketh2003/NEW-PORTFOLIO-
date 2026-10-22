import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Zap, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'UAV Defense', 'Computer Vision', 'Edge AI', 'Research'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>DEPLOYED SYSTEMS & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Engineering Work
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            High-performance computer vision engines, defense platforms, edge tracking systems, and published research.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-xl p-6 flex flex-col justify-between relative group border border-slate-800"
            >
              <div>
                {/* Card Top Banner */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                    {project.category}
                  </span>
                  {project.isFeatured && (
                    <span className="flex items-center space-x-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      <Zap className="w-3 h-3" />
                      <span>FEATURED</span>
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-teal-300/90 mb-4">
                  {project.tagline}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-4 text-xs text-slate-300">
                  {project.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Metric Highlight */}
                {project.metrics && (
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
                    <span className="text-slate-400 block text-[10px]">KEY METRIC:</span>
                    {project.metrics}
                  </div>
                )}
              </div>

              {/* Bottom Tech Pills & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-mono">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>LIVE SYSTEM</span>
                    </a>
                  ) : (
                    <span className="text-slate-500">DEFENSE INTERNAL</span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
