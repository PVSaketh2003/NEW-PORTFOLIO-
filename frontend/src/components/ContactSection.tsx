import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContact } from '../services/api';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage & { honeypot?: string }>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'idle' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', text: 'Please fill in all required fields (Name, Email, Message).' });
      return;
    }

    if (formData.message.trim().length < 5) {
      setFeedback({ type: 'error', text: 'Message must be at least 5 characters long.' });
      return;
    }

    setLoading(true);
    setFeedback({ type: 'idle', text: '' });

    try {
      const res = await submitContact(formData);
      setFeedback({
        type: 'success',
        text: res.message || 'Your message has been sent successfully! I will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err: any) {
      setFeedback({
        type: 'error',
        text: err.message || 'Failed to submit message. Please email pvsairamsaketh@gmail.com directly.',
      });
    } finally {
      setLoading(false);
    }
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
            I am available for full-time Computer Vision, Deep Learning, and Edge AI roles where models must perform reliably on real hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels & Verified Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-surface p-6 sm:p-7 space-y-5">
              <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono pb-2 border-b border-theme-border flex items-center justify-between">
                <span>Direct Contact Channels</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="mailto:pvsairamsaketh@gmail.com"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-theme-elevated border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent/50 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-theme-card border border-theme-border text-theme-accent group-hover:border-theme-accent/50">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono text-theme-muted block uppercase">Email</span>
                    <span className="font-medium text-theme-text group-hover:text-theme-accent">pvsairamsaketh@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919359587816"
                  className="flex items-center space-x-3 p-3.5 rounded-xl bg-theme-elevated border border-theme-border text-theme-secondary hover:text-theme-accent hover:border-theme-accent/50 transition-all duration-200 group"
                >
                  <div className="p-2 rounded-lg bg-theme-card border border-theme-border text-theme-accent group-hover:border-theme-accent/50">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-theme-muted block uppercase">Phone</span>
                    <span className="font-medium text-theme-text group-hover:text-theme-accent">+91 9359587816</span>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-theme-elevated border border-theme-border text-theme-secondary">
                  <div className="p-2 rounded-lg bg-theme-card border border-theme-border text-theme-accent">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-theme-muted block uppercase">Location</span>
                    <span className="font-medium text-theme-text">Nagpur, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="pt-2">
                <h4 className="text-[11px] font-mono text-theme-secondary uppercase mb-2.5 font-semibold">
                  Professional Profiles:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com/in/pvsaketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-theme-elevated border border-theme-border text-xs font-semibold text-theme-text hover:border-theme-accent/50 hover:text-theme-accent transition-all duration-200 shadow-xs"
                  >
                    <Linkedin className="w-4 h-4 text-theme-accent" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/PVSaketh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2.5 p-3 rounded-xl bg-theme-elevated border border-theme-border text-xs font-semibold text-theme-text hover:border-theme-accent/50 hover:text-theme-accent transition-all duration-200 shadow-xs"
                  >
                    <Github className="w-4 h-4 text-theme-accent" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Django REST API Form */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8">
              
              <h3 className="text-xs font-semibold text-theme-text uppercase tracking-wider font-mono pb-2 mb-6 border-b border-theme-border">
                Send a Direct Message (Django REST API + SMTP)
              </h3>

              {feedback.type === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-theme-elevated border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-start space-x-3 animate-fade-in shadow-xs">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
                  <span>{feedback.text}</span>
                </div>
              )}

              {feedback.type === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-theme-elevated border border-rose-500/40 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-start space-x-3 animate-fade-in shadow-xs">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" />
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Honeypot field for anti-spam bots */}
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot || ''}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-theme-text font-medium mb-1.5">
                      Your Name <span className="text-theme-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiters / Engineering Leads"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-theme-elevated border border-theme-border text-theme-text placeholder-theme-textMuted focus:outline-none focus:border-theme-accent transition-colors shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-theme-text font-medium mb-1.5">
                      Your Email <span className="text-theme-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="hiring@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-theme-elevated border border-theme-border text-theme-text placeholder-theme-textMuted focus:outline-none focus:border-theme-accent transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-theme-text font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Computer Vision / Edge AI Engineering Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-theme-elevated border border-theme-border text-theme-text placeholder-theme-textMuted focus:outline-none focus:border-theme-accent transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-theme-text font-medium mb-1.5">
                    Message <span className="text-theme-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-theme-elevated border border-theme-border text-theme-text placeholder-theme-textMuted focus:outline-none focus:border-theme-accent transition-colors resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3 text-xs font-semibold disabled:opacity-50 group shadow-md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message via SMTP...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      <span>Send Message to PV Sairam Saketh</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
