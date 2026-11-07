import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import WhySection from './components/WhySection';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import PriceComparison from './components/PriceComparison';
import OfferStack from './components/OfferStack';
import OrderForm from './components/OrderForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black-deep text-white-off relative">
      {/* 1. Sticky Glassmorphic Header with Wordmark Logo & Blur */}
      <Navbar />

      {/* 2. Hero Section (Header Section) */}
      <Hero />

      {/* 3. Sliding Stripe (Comes after the Hero Header Section) */}
      <TickerBar />

      {/* 4. Body Sections */}
      <WhySection />
      <ProductShowcase />
      <HowItWorks />
      <PriceComparison />
      <OfferStack />
      <OrderForm />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* 5. Mobile Floating Action Bar */}
      <StickyMobileCTA />
    </div>
  );
}
