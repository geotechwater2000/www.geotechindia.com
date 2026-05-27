import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

const productLinks = [
  'Water Treatment Systems',
  'Wastewater Treatment (STP)',
  'Effluent Treatment (ETP)',
  'AI Water Systems',
  'Chemical Treatment',
  'RO Rental Plants',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ocean-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/geotech_(1).jpg.jpeg" alt="Geotech" className="w-12 h-12 object-contain rounded-lg bg-white p-1" />
              <div>
                <div className="font-heading font-extrabold text-xl tracking-wide">GEOTECH</div>
                <div className="text-sky-400 text-xs font-medium">geotechindia.com</div>
              </div>
            </div>
            <p className="text-xl font-heading font-bold italic text-sky-300 mb-4">
              "Reuse. Restore. Revive."
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for water and wastewater treatment solutions since 2015.
              Serving industries, institutions, and communities across India.
            </p>
            <div className="flex items-center gap-2 text-sky-400">
              <Droplets size={16} />
              <span className="text-xs font-medium">Est. 2015 — Guduvancherry, Tamil Nadu</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Our Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    onClick={(e) => { e.preventDefault(); handleNav('#products'); }}
                    className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400 transition-colors" />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Swathi Nagar, Guduvancherry,<br />
                  Tamil Nadu — 603 202
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-sky-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+917449271492" className="block text-slate-400 hover:text-sky-400 text-sm transition-colors">+91 74492 71492</a>
                  <a href="tel:+917299013150" className="block text-slate-400 hover:text-sky-400 text-sm transition-colors">+91 72990 13150</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sky-400 flex-shrink-0" />
                <a href="mailto:info@geotechindia.com" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">
                  info@geotechindia.com
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="mt-6 inline-block btn-primary text-sm"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Geotech India. All rights reserved. |{' '}
            <span className="text-sky-500 font-medium">geotechindia.com</span>
          </p>
          <p className="text-xs">
            Water Treatment &bull; Wastewater Solutions &bull; AI Systems &bull; Rental Plants
          </p>
        </div>
      </div>
    </footer>
  );
}
