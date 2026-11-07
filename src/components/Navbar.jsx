import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Tag } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO, PROMO_EXPIRY_DATE } from '../config/links';

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
    { label: 'Video Demo', targetId: 'video-demo' },
    { label: 'Smart Controls', targetId: 'interactive-demo' },
    { label: 'Why It Works', targetId: 'how-it-works' },
    { label: 'Comparison', targetId: 'pricing' },
    { label: 'Reviews', targetId: 'reviews' },
    { label: 'FAQ', targetId: 'faq' },
  ];

  const handleNavClick = (targetId) => {
    setMobileMenuOpen(false);
    scrollToSection(targetId);
  };

  const handleOrderClick = () => {
    setMobileMenuOpen(false);
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.open(BUY_NOW_LINK, '_blank');
    } else {
      scrollToSection('order');
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-black-deep/75 border-b ${
        scrolled
          ? 'border-navy-lighter/30 py-3.5 shadow-2xl shadow-black/80 bg-black-deep/90'
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
          <span className="w-1.5 h-1.5 rounded-xs bg-green-brand mb-1 group-hover:scale-125 transition-transform" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-text">
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
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-green-brand font-bold uppercase tracking-wider">
            <Tag size={13} className="text-green-brand" />
            <span>30% Off Till {PROMO_EXPIRY_DATE}</span>
          </div>

          <button
            type="button"
            onClick={handleOrderClick}
            className="inline-flex items-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-green-brand/20 cursor-pointer"
          >
            <span>Claim Offer (&#8358;{PRICE_PROMO})</span>
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
                className="w-full flex items-center justify-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-black text-sm py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer shadow-lg shadow-green-brand/20 uppercase tracking-wider"
              >
                <span>Pay &#8358;{PRICE_PROMO} & Claim 30% Off</span>
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
