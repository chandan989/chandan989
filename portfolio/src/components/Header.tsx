import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#protocols', label: 'PROTOCOLS' },
  { href: '#capabilities', label: 'CAPABILITIES' },
  { href: '#uplink', label: 'UPLINK' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);

      // Determine active section
      const sections = ['uplink', 'protocols', 'capabilities'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-background'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm tracking-wider link-underline">
          [CHANDAN.SYS]
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-display text-xs tracking-wider transition-colors duration-300 link-underline ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden interactive p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="w-full h-px bg-foreground origin-left"
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? -1 : 0 }}
            />
            <motion.span
              className="w-full h-px bg-foreground"
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-full h-px bg-foreground origin-left"
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? 1 : 0 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden border-t border-border bg-background"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display text-sm tracking-wider ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
