import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { submitContact } from '../services/api';
import { ContactMessage } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const res = await submitContact(formData);
      setStatus({ type: 'success', message: res.message || 'Message transmitted successfully! I will get back to you shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit message. Please email pvsairamsaketh@gmail.com directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact & Engineering Inquiries
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Open to roles in Computer Vision Engineering, Edge AI Systems, Defense Avionics, and Autonomous Robotics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-xl border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white font-mono flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span>DIRECT COORDINATES</span>
              </h3>

              <div className="space-y-4 text-sm font-mono">
                <a
                  href="mailto:pvsairamsaketh@gmail.com"
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors p-3 rounded-lg bg-slate-900/60 border border-slate-800"
                >
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">pvsairamsaketh@gmail.com</span>
                </a>

                <a
                  href="tel:+919359587816"
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors p-3 rounded-lg bg-slate-900/60 border border-slate-800"
                >
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>+91 9359587816</span>
                </a>

                <div className="flex items-center space-x-3 text-slate-300 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono text-slate-400 mb-3">PROFESSIONAL NETWORKS:</div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://linkedin.com/in/pvsaketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/PVSaketh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-mono transition-colors"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Architecture note card */}
            <div className="glass-panel p-5 rounded-xl border border-cyan-500/20 text-xs font-mono text-slate-400 space-y-1.5">
              <div className="text-cyan-300 font-semibold">// PRODUCTION PIPELINE</div>
              <p>Form submissions securely validated, throttled, and persisted to PostgreSQL on AWS EC2 k3s cluster.</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2 font-mono">
                <Send className="w-5 h-5 text-cyan-400" />
                <span>Send a Dispatch</span>
              </h3>

              {status.type === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-mono flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-950/60 border border-red-500/40 text-red-300 text-xs sm:text-sm font-mono flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@aerospace-corp.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="UAV Vision Engineering Collaboration / Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1.5">Message Content *</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, team, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold hover:from-cyan-400 hover:to-teal-400 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
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
