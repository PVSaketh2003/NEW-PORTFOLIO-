import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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
  const [feedback, setFeedback] = useState<{ type: 'idle' | 'success' | 'error'; text: string }>({
    type: 'idle',
    text: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    setFeedback({ type: 'idle', text: '' });

    try {
      const res = await submitContact(formData);
      setFeedback({
        type: 'success',
        text: res.message || 'Your message has been sent successfully. I will get back to you shortly.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
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
    <section id="contact" className="py-16 lg:py-24 bg-[#11151D]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-[#62C6F2] uppercase">
            CONTACT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] tracking-tight mt-1">
            Have an interesting problem to solve?
          </h2>
          <p className="text-sm sm:text-base text-[#A4ADBB] mt-2 leading-relaxed">
            I'm interested in computer vision, Edge AI, real-time video analytics, and engineering opportunities where AI systems need to work beyond a notebook.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="card-surface p-6 space-y-4">
              <h3 className="text-sm font-semibold text-[#F5F7FA] uppercase tracking-wider font-mono">
                Direct Channels
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href="mailto:pvsairamsaketh@gmail.com"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#A4ADBB] hover:text-[#F5F7FA] hover:border-[#62C6F2]/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#62C6F2] flex-shrink-0" />
                  <span className="truncate">pvsairamsaketh@gmail.com</span>
                </a>

                <div className="flex items-center space-x-3 p-3 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#A4ADBB]">
                  <MapPin className="w-4 h-4 text-[#62C6F2] flex-shrink-0" />
                  <span>Nagpur, Maharashtra, India</span>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-mono text-[#A4ADBB] uppercase mb-2">
                  Professional Profiles
                </h4>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://linkedin.com/in/pvsaketh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#0B0D12] border border-[#273142] text-xs font-medium text-[#F5F7FA] hover:border-[#62C6F2]/40 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#62C6F2]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/PVSaketh2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-[#0B0D12] border border-[#273142] text-xs font-medium text-[#F5F7FA] hover:border-[#62C6F2]/40 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-[#62C6F2]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-8">
              
              {feedback.type === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-[#0B0D12] border border-[#7CE0C3]/40 text-[#7CE0C3] text-xs sm:text-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{feedback.text}</span>
                </div>
              )}

              {feedback.type === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-[#0B0D12] border border-red-500/40 text-red-400 text-xs sm:text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#F5F7FA] font-medium mb-1.5">
                      Your Name <span className="text-[#62C6F2]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#F5F7FA] placeholder-[#788396] focus:outline-none focus:border-[#62C6F2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F5F7FA] font-medium mb-1.5">
                      Your Email <span className="text-[#62C6F2]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#F5F7FA] placeholder-[#788396] focus:outline-none focus:border-[#62C6F2] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#F5F7FA] font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Collaboration / Role Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#F5F7FA] placeholder-[#788396] focus:outline-none focus:border-[#62C6F2] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#F5F7FA] font-medium mb-1.5">
                    Message <span className="text-[#62C6F2]">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0D12] border border-[#273142] text-[#F5F7FA] placeholder-[#788396] focus:outline-none focus:border-[#62C6F2] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-2.5 text-xs font-semibold disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
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
