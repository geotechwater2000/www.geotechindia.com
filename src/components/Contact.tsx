import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: 'Address',
      lines: ['Swathi Nagar, Guduvancherry', 'Tamil Nadu — 603 202', 'India'],
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      lines: ['+91 74492 71492', '+91 72990 13150'],
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      lines: ['info@geotechindia.com', 'support@geotechindia.com'],
    },
    {
      icon: <Clock size={20} />,
      label: 'Business Hours',
      lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">
            Let's Talk About Your
            <br />
            <span className="text-gradient">Water Treatment Needs</span>
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            Have a project in mind or need expert advice? Reach out to our team for a free
            consultation and customized solution proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5 fade-in-section">
            {contactInfo.map((info) => (
              <div key={info.label} className="card p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-ocean-800 mb-1">{info.label}</div>
                  {info.lines.map((line) => (
                    <div key={line} className="text-slate-500 text-sm">{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="card overflow-hidden rounded-2xl">
              <iframe
                title="Geotech Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.617534804!2d80.05!3d12.838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUwJzE3LjAiTiA4MMKwMDMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="px-4 py-3 bg-white text-xs text-slate-500 flex items-center gap-2">
                <MapPin size={12} className="text-sky-500" />
                Swathi Nagar, Guduvancherry 603202
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 fade-in-section">
            <div className="card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-ocean-800 mb-3">Message Sent!</h3>
                  <p className="text-slate-500 max-w-xs">
                    Thank you for reaching out. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary mt-7 text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-heading font-bold text-xl text-ocean-800 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject / Inquiry Type</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="water-treatment">Water Treatment System</option>
                        <option value="wastewater">Wastewater Treatment (STP/ETP)</option>
                        <option value="rental">RO Rental Plant</option>
                        <option value="ai-system">AI Water Treatment System</option>
                        <option value="maintenance">Maintenance & AMC</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Describe your requirements, daily water consumption, type of industry, or any specific questions..."
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all duration-200 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
