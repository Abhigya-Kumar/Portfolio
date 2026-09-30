import { useState } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useState(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-sm border-b border-gray-200/60' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(245,244,240,0.92)' : '#f5f4f0' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
          Animesh Prakash
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={800}
              spy={true}
              activeClass="text-gray-900 font-semibold border-b-2 border-gray-900"
              offset={-60}
              className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition-all py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:animesh@example.com"
            className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-500 rounded-full px-3 py-1.5 transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Open to Work
          </a>
          <a
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full px-4 py-1.5 transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
