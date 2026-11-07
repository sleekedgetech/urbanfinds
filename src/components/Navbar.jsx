import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { BUY_NOW_LINK } from '../config/links';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why It Works', href: '#how-it-works' },
    { label: 'Controls', href: '#interactive-demo' },
    { label: 'Comparison', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black-deep/85 backdrop-blur-md border-b border-navy-lighter/30 py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-green-brand flex items-center justify-center font-heading font-black text-black-deep text-lg group-hover:scale-105 transition-transform">
            U
          </div>
          <span className="font-heading font-black text-xl tracking-tight text-white-off">
            URBAN<span className="text-green-brand font-light">FINDS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-text">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white-off transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-text">
            <ShieldCheck size={14} className="text-green-brand" />
            <span>Pay on Delivery</span>
          </div>
          <a
            href={BUY_NOW_LINK}
            className="inline-flex items-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-green-brand/20 cursor-pointer"
          >
            <span>Claim Offer (₦22,500)</span>
            <ChevronRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white-off p-2 rounded-lg hover:bg-navy-light/40 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black-deep/95 border-b border-navy-lighter/30 px-5 py-6 space-y-4 backdrop-blur-lg"
          >
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-slate-light hover:text-green-brand transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-navy-lighter/25">
              <a
                href={BUY_NOW_LINK}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-sm py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer shadow-lg shadow-green-brand/20"
              >
                <span>Order Now — Pay on Delivery</span>
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
