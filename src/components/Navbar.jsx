import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection } from '../config/links';

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
    { label: 'Why It Works', targetId: 'how-it-works' },
    { label: 'Smart Controls', targetId: 'interactive-demo' },
    { label: 'Cost Comparison', targetId: 'pricing' },
    { label: 'Customer Reviews', targetId: 'reviews' },
    { label: 'Questions & Answers', targetId: 'faq' },
  ];

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  const handleOrderClick = () => {
    setMobileMenuOpen(false);
    if (BUY_NOW_LINK.startsWith('http')) {
      window.location.href = BUY_NOW_LINK;
    } else {
      scrollToSection('order');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-black-deep/70 border-b ${
        scrolled
          ? 'border-navy-lighter/30 py-3.5 shadow-2xl shadow-black/80 bg-black-deep/85'
          : 'border-navy-lighter/15 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Simple Bold Wordmark Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 group cursor-pointer text-left focus:outline-none"
        >
          <span className="font-heading font-black text-2xl sm:text-[1.65rem] tracking-tight text-white-off leading-none">
            URBAN<span className="text-green-brand font-black">FINDS</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-brand mb-1 group-hover:scale-125 transition-transform" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-text">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.targetId)}
              className="hover:text-white-off transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-text font-semibold">
            <ShieldCheck size={14} className="text-green-brand" />
            <span>Pay on Delivery</span>
          </div>

          <button
            type="button"
            onClick={handleOrderClick}
            className="inline-flex items-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-green-brand/20 cursor-pointer"
          >
            <span>Order (₦22,500)</span>
            <ChevronRight size={15} strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white-off p-2 rounded-xl hover:bg-navy-light/40 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Glassmorphic One-Page Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-black-deep/95 border-b border-navy-lighter/30 px-6 py-6 space-y-4 backdrop-blur-2xl shadow-2xl"
          >
            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.targetId)}
                  className="text-left text-sm font-bold text-slate-light hover:text-green-brand transition-colors py-2 border-b border-navy-lighter/15 cursor-pointer focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleOrderClick}
                className="w-full flex items-center justify-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-extrabold text-sm py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer shadow-lg shadow-green-brand/20 uppercase tracking-wider"
              >
                <span>Order Now — Pay on Delivery</span>
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
