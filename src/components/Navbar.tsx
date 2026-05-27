import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'about', 'products', 'services', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/97 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-3 group"
          >
            <img
              src="/geotech_(1).jpg.jpeg"
              alt="Geotech Logo"
              className="h-12 w-12 object-contain rounded-lg"
            />
            <div>
              <span className={`font-heading font-extrabold text-xl tracking-wide transition-colors duration-300 ${scrolled ? 'text-ocean-800' : 'text-white'}`}>
                GEOTECH
              </span>
              <p className={`text-xs font-medium tracking-wider transition-colors duration-300 ${scrolled ? 'text-sky-500' : 'text-sky-200'}`}>
                Reuse. Restore. Revive.
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 animated-underline ${
                  activeSection === link.href.replace('#', '')
                    ? scrolled
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-white bg-white/20'
                    : scrolled
                    ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                    : 'text-white/90 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917449271492"
              className={`flex items-center gap-2 text-sm font-semibold transition-all duration-200 ${
                scrolled ? 'text-sky-600 hover:text-sky-700' : 'text-white hover:text-sky-200'
              }`}
            >
              <Phone size={15} />
              +91 74492 71492
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-96 pb-4' : 'max-h-0'
          } bg-white rounded-2xl shadow-xl mb-2`}
        >
          <div className="px-4 pt-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
              className="block btn-primary text-sm text-center mt-3"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
