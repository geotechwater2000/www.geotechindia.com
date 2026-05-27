import { useEffect, useRef } from 'react';
import { ChevronDown, Droplets, Recycle, Leaf } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '9+', label: 'Years Experience' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Products & Solutions' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
    const els = heroRef.current?.querySelectorAll('.fade-in-section');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-100/20 -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-100/15 translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-sky-50/10 -translate-x-1/2 -translate-y-1/2" />

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-24" fill="#f0f9ff">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="fade-in-section">
              <div className="inline-flex items-center gap-2 bg-sky-100 backdrop-blur-sm text-sky-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-sky-200">
                <Droplets size={14} />
                Est. 2015 — Trusted Water Treatment Experts
              </div>
            </div>

            <h1 className="fade-in-section font-heading font-extrabold text-5xl md:text-6xl lg:text-6xl text-ocean-800 leading-tight mb-4">
              Clean Water.
              <br />
              <span className="text-sky-600">Sustainable Future.</span>
            </h1>

            <p className="fade-in-section text-3xl md:text-4xl font-heading font-bold text-sky-600 italic mb-6 tracking-wide">
              "Reuse. Restore. Revive."
            </p>

            <p className="fade-in-section text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
              Geotech India delivers cutting-edge water treatment, wastewater management,
              and AI-powered water systems. Over 9 years of experience transforming
              water challenges into sustainable solutions.
            </p>

            <div className="fade-in-section flex flex-wrap gap-4">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-sky-500 text-white hover:bg-sky-600 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-hero hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 font-bold px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Contact Us
              </a>
            </div>

            {/* Badges */}
            <div className="fade-in-section mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Droplets size={14} />, text: 'Water Treatment' },
                { icon: <Recycle size={14} />, text: 'Wastewater Systems' },
                { icon: <Leaf size={14} />, text: 'Eco-Friendly Solutions' },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 bg-sky-100 backdrop-blur-sm text-sky-700 text-xs font-medium px-4 py-2 rounded-full border border-sky-200">
                  {b.icon}
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Logo card */}
          <div className="fade-in-section hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-sky-200/30 blur-3xl rounded-full scale-75 animate-pulse-soft" />
              <div className="relative bg-sky-50 backdrop-blur-md border border-sky-200 rounded-3xl p-10 shadow-card animate-float">
                <img
                  src="/geotech_(1).jpg.jpeg"
                  alt="Geotech Logo"
                  className="w-56 h-56 object-contain mx-auto"
                />
                <p className="text-center text-ocean-800 font-heading font-bold text-2xl mt-4 tracking-widest">GEOTECH</p>
                <p className="text-center text-sky-600 text-sm font-medium mt-1 italic">geotechindia.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="fade-in-section mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-sky-100 backdrop-blur-sm border border-sky-200 rounded-2xl py-6 px-4">
              <div className="font-heading font-extrabold text-3xl text-sky-600 mb-1">{s.value}</div>
              <div className="text-slate-600 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-sky-400 hover:text-sky-600 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
