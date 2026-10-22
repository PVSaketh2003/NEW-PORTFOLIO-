import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  Briefcase, 
  Clock, 
  Cpu, 
  ShieldCheck,
  Send
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('pvsairamsaketh@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('+91 9359587816');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-theme-bg border-b border-theme-border transition-colors duration-300 relative">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-theme-accent uppercase flex items-center gap-2">
            <span>08 · CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-text tracking-tight mt-1">
            Let's Discuss Engineering Opportunities
          </h2>
          <p className="text-sm sm:text-base text-theme-secondary mt-2 leading-relaxed">
            I am available for full-time Computer Vision, Deep Learning, and Edge AI roles where models must perform reliably on real hardware under field constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Interactive Channels */}
          <div className="lg:col-span-6 space-y-4">
            <div className="card-surface p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono flex items-center gap-2">
                  <span>Direct Communication Channels</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Hire</span>
                </span>
              </div>

              {/* Email Card with 1-Click Copy and Mailto */}
              <div className="p-4 rounded-xl bg-theme-elevated border border-theme-border hover:border-theme-accent/50 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 truncate">
                    <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border text-theme-accent">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 block uppercase tracking-wider">Primary Email</span>
                      <a 
                        href="mailto:pvsairamsaketh@gmail.com"
                        className="text-sm font-semibold text-theme-text hover:text-theme-accent transition-colors truncate block"
                      >
                        pvsairamsaketh@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 flex-shrink-0 ml-2">
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/40 transition-all text-xs font-medium flex items-center gap-1 shadow-xs"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[10px] font-mono text-emerald-500 hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-mono hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:pvsairamsaketh@gmail.com?subject=Interview%20Inquiry%20-%20Computer%20Vision%20Engineer"
                      className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/40 transition-all text-xs shadow-xs"
                      title="Open default email app"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card with 1-Click Copy and Call */}
              <div className="p-4 rounded-xl bg-theme-elevated border border-theme-border hover:border-theme-accent/50 transition-all duration-200 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border text-theme-accent">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 block uppercase tracking-wider">Direct Phone / Mobile</span>
                      <a 
                        href="tel:+919359587816"
                        className="text-sm font-semibold text-theme-text hover:text-theme-accent transition-colors"
                      >
                        +91 9359587816
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 flex-shrink-0">
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/40 transition-all text-xs font-medium flex items-center gap-1 shadow-xs"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[10px] font-mono text-emerald-500 hidden sm:inline">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-mono hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="tel:+919359587816"
                      className="p-2 rounded-lg border border-theme-border bg-theme-card text-theme-secondary hover:text-theme-accent hover:border-theme-accent/40 transition-all text-xs shadow-xs"
                      title="Call direct"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Relocation Info */}
              <div className="p-4 rounded-xl bg-theme-elevated border border-theme-border flex items-center space-x-3">
                <div className="p-2.5 rounded-lg bg-theme-card border border-theme-border text-theme-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 block uppercase tracking-wider">Current Location</span>
                  <span className="text-sm font-semibold text-theme-text">Nagpur, Maharashtra, India</span>
                  <span className="text-[11px] text-theme-secondary block mt-0.5">
                    Open to Relocation (India & Global / Remote)
                  </span>
                </div>
              </div>

              {/* Verified Profiles Row */}
              <div className="pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/pvsaketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-theme-elevated border border-theme-border text-xs font-semibold text-theme-text hover:border-theme-accent/50 hover:text-theme-accent hover:-translate-y-0.5 transition-all duration-200 shadow-xs group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Linkedin className="w-4 h-4 text-theme-accent" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a
                    href="https://github.com/PVSaketh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-theme-elevated border border-theme-border text-xs font-semibold text-theme-text hover:border-theme-accent/50 hover:text-theme-accent hover:-translate-y-0.5 transition-all duration-200 shadow-xs group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <Github className="w-4 h-4 text-theme-accent" />
                      <span>GitHub Repositories</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Recruiter Summary & Action Portal */}
          <div className="lg:col-span-6 space-y-4">
            <div className="card-surface p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono flex items-center gap-2">
                  <span>Recruiter Quick Coordinates</span>
                </h3>
                <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Verified Credentials</span>
              </div>

              {/* Structured Key Fast Facts for Technical Recruiters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border space-y-1">
                  <div className="flex items-center space-x-2 text-theme-accent font-mono text-[11px] font-semibold uppercase">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Current Role</span>
                  </div>
                  <div className="font-bold text-sm text-theme-text">Executive CV Engineer</div>
                  <div className="text-[11px] text-theme-secondary">Solar Industries India Ltd (1.5 Years)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border space-y-1">
                  <div className="flex items-center space-x-2 text-theme-accent font-mono text-[11px] font-semibold uppercase">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Specialization</span>
                  </div>
                  <div className="font-bold text-sm text-theme-text">Edge AI & Computer Vision</div>
                  <div className="text-[11px] text-theme-secondary">NVIDIA Jetson · TensorRT · UAV</div>
                </div>

                <div className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border space-y-1">
                  <div className="flex items-center space-x-2 text-theme-accent font-mono text-[11px] font-semibold uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Target Roles</span>
                  </div>
                  <div className="font-bold text-sm text-theme-text">Full-Time Engineering</div>
                  <div className="text-[11px] text-theme-secondary">Computer Vision · Deep Learning · Edge AI</div>
                </div>

                <div className="p-3.5 rounded-xl bg-theme-elevated border border-theme-border space-y-1">
                  <div className="flex items-center space-x-2 text-theme-accent font-mono text-[11px] font-semibold uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Academics & Research</span>
                  </div>
                  <div className="font-bold text-sm text-theme-text">B.Tech CSE (9.33 / 10)</div>
                  <div className="text-[11px] text-theme-secondary">SRM University · ICCI Published</div>
                </div>

              </div>

              {/* Direct Recruiter Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:pvsairamsaketh@gmail.com?subject=Interview%20Invitation%20-%20PV%20Sairam%20Saketh&body=Hello%20Sairam,%0A%0AWe%20reviewed%20your%20portfolio%20and%20experience%20at%20Solar%20Industries%20India%20Limited.%20We%20would%20like%20to%20discuss%20an%20engineering%20opportunity%20with%20our%20team.%0A%0ABest%20regards,"
                  className="btn-primary w-full py-3.5 text-xs font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to pvsairamsaketh@gmail.com</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border border-theme-border bg-theme-elevated hover:bg-theme-card hover:border-theme-accent/50 text-theme-text font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-theme-accent" />
                  <span>Download Verified Resume (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
