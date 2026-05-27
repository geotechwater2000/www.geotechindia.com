import { useEffect, useRef } from 'react';
import {
  Wrench, Lightbulb, BarChart3, Truck, HeartHandshake, GraduationCap,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Design & Engineering',
    desc: 'Custom-engineered water and wastewater treatment solutions designed from the ground up for your specific requirements, flow rates, and water quality parameters.',
    points: ['Process design & simulation', 'P&ID engineering', 'Civil & structural integration', 'Equipment sizing & selection'],
    color: 'sky',
  },
  {
    icon: <Truck size={28} />,
    title: 'Supply & Installation',
    desc: 'End-to-end project execution from equipment supply to complete installation, commissioning, and handover. Zero-disruption approach ensures minimal downtime.',
    points: ['Turnkey project delivery', 'Equipment procurement', 'On-site installation', 'Performance commissioning'],
    color: 'teal',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Operation & Maintenance',
    desc: 'Comprehensive O&M services including routine maintenance, breakdowns, consumable replacement, and performance optimization to ensure peak efficiency.',
    points: ['Scheduled preventive maintenance', '24/7 emergency support', 'Spare parts management', 'Operator training'],
    color: 'ocean',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Annual Maintenance Contracts',
    desc: 'Structured AMC plans covering all aspects of plant maintenance. Flexible packages ranging from basic support to comprehensive all-inclusive contracts.',
    points: ['Customizable AMC packages', 'Predictive maintenance', 'Performance reporting', 'Chemical procurement support'],
    color: 'sky',
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Rental & Lease Solutions',
    desc: 'Flexible rental models for RO and water treatment plants. Zero capital investment with full operational support — ideal for temporary or growing needs.',
    points: ['Zero installation charges', 'Free maintenance included', '10 LPH to 1000 LPH+', 'Customizable solutions'],
    color: 'teal',
  },
  {
    icon: <GraduationCap size={28} />,
    title: 'Audit & Consultancy',
    desc: 'Expert technical audits of existing water and wastewater systems to identify performance gaps, compliance issues, and upgrade opportunities.',
    points: ['Water quality audits', 'Regulatory compliance review', 'Process optimization', 'Technology upgradation'],
    color: 'ocean',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; check: string }> = {
  sky: {
    bg: 'bg-sky-50',
    icon: 'bg-sky-100 text-sky-600',
    border: 'border-sky-100 hover:border-sky-300',
    check: 'text-sky-500',
  },
  teal: {
    bg: 'bg-teal-50',
    icon: 'bg-teal-100 text-teal-600',
    border: 'border-teal-100 hover:border-teal-300',
    check: 'text-teal-500',
  },
  ocean: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-600',
    border: 'border-blue-100 hover:border-blue-300',
    check: 'text-blue-500',
  },
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">
            End-to-End Water Treatment
            <br />
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            From initial consultation and system design through to long-term maintenance and support,
            Geotech delivers complete lifecycle services for water and wastewater infrastructure.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.title}
                className={`fade-in-section card border ${c.border} p-7 group`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`product-icon-wrap w-14 h-14 rounded-2xl ${c.icon} flex items-center justify-center mb-5`}>
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-ocean-800 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle size={13} className={`${c.check} flex-shrink-0 mt-0.5`} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="fade-in-section mt-16 bg-water rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5" />
          <div className="relative z-10">
            <p className="text-sky-200 text-sm font-semibold uppercase tracking-widest mb-3">Get Started Today</p>
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Need a Custom Water Treatment Solution?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-base">
              Our expert team is ready to assess your requirements and design a system that meets
              your specifications, budget, and compliance needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-white text-sky-700 hover:bg-sky-50 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-hero hover:shadow-lg hover:-translate-y-0.5"
              >
                Request a Consultation
              </a>
              <a
                href="tel:+917449271492"
                className="border-2 border-white text-white hover:bg-white/15 font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
