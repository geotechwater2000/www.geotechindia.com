import { useEffect, useRef } from 'react';
import { Award, Users, MapPin, TrendingUp, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: <Award size={22} />,
    title: 'Industry Expertise',
    desc: 'Over 9 years of specialized experience in water and wastewater treatment systems across diverse industries.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Quality Assured',
    desc: 'All systems are designed, tested, and delivered to the highest quality and safety standards.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Innovation Driven',
    desc: 'Pioneering AI-integrated water management systems and smart monitoring solutions.',
  },
  {
    icon: <Users size={22} />,
    title: 'Customer First',
    desc: 'Dedicated after-sales support, free maintenance, and zero installation charges on rental systems.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Sustainable Focus',
    desc: 'Every solution is designed with environmental sustainability in mind — Reuse, Restore, Revive.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Pan-India Presence',
    desc: 'Based in Guduvancherry, serving clients across Tamil Nadu and all major industrial regions in India.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <p className="fade-in-section section-subtitle">About Us</p>
            <h2 className="fade-in-section section-title">
              A Decade of Water
              <br />
              <span className="text-gradient">Excellence & Innovation</span>
            </h2>
            <p className="fade-in-section section-desc mb-5">
              Founded in 2015, Geotech India has grown into one of the most trusted names in water and
              wastewater treatment technology. We specialize in designing, manufacturing, and commissioning
              advanced treatment systems tailored to industrial, commercial, and municipal needs.
            </p>
            <p className="fade-in-section section-desc mb-8">
              Our journey from a small water treatment firm to a comprehensive solutions provider is marked
              by relentless innovation, a commitment to sustainability, and an unwavering focus on customer
              satisfaction. Today, we offer everything from classic RO systems to AI-powered robotic
              operators and cloud-view monitoring technology.
            </p>
            <div className="fade-in-section flex flex-wrap gap-3">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 text-center">
                <div className="font-heading font-extrabold text-2xl text-sky-600">2015</div>
                <div className="text-slate-500 text-xs font-medium mt-1">Year Founded</div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 text-center">
                <div className="font-heading font-extrabold text-2xl text-sky-600">500+</div>
                <div className="text-slate-500 text-xs font-medium mt-1">Installations</div>
              </div>
              <div className="bg-sky-50 border border-sky-200 rounded-2xl px-6 py-4 text-center">
                <div className="font-heading font-extrabold text-2xl text-sky-600">24/7</div>
                <div className="text-slate-500 text-xs font-medium mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right — image + quote */}
          <div className="fade-in-section relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover bg-gradient-to-br from-sky-50 to-ocean-50 border border-sky-100 p-10 flex flex-col items-center justify-center min-h-[400px]">
              <img
                src="/geotech_(1).jpg.jpeg"
                alt="Geotech"
                className="w-40 h-40 object-contain mb-6"
              />
              <blockquote className="text-center">
                <p className="font-heading font-bold text-3xl text-gradient italic mb-2">
                  "Reuse. Restore. Revive."
                </p>
                <footer className="text-slate-500 text-sm font-medium">— Geotech India</footer>
              </blockquote>
              <div className="mt-6 text-center text-slate-600 text-sm leading-relaxed max-w-xs">
                Transforming water challenges into sustainable solutions for industries, institutions, and communities.
              </div>
              {/* Decorative */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-sky-100/50" />
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-ocean-100/50" />
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="fade-in-section text-center mb-12">
          <p className="section-subtitle">What Drives Us</p>
          <h2 className="section-title">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="fade-in-section card p-7 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="product-icon-wrap w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-ocean-800 mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
