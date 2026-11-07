import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerBar from './components/TickerBar';
import WhySection from './components/WhySection';
import VideoShowcase from './components/VideoShowcase';
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
      {/* 1. Sticky Frosted-Glass Header with Wordmark Logo */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Sliding Stripe (Positioned after the Hero Header Section) */}
      <TickerBar />

      {/* 4. Empathy & Story Section */}
      <WhySection />

      {/* 5. Live Demonstration Video & 3-Step Delivery Protocol */}
      <VideoShowcase />

      {/* 6. Interactive Digital Controls Simulator */}
      <ProductShowcase />

      {/* 7. How It Works */}
      <HowItWorks />

      {/* 8. Cost & Health Comparison */}
      <PriceComparison />

      {/* 9. Offer Stack & Bundle Options */}
      <OfferStack />

      {/* 10. Direct Checkout & VIP Group Admission Form */}
      <OrderForm />

      {/* 11. Testimonials & Social Proof */}
      <Testimonials />

      {/* 12. Frequently Asked Questions */}
      <FAQ />

      {/* 13. Final Call to Action */}
      <FinalCTA />

      {/* 14. Footer */}
      <Footer />

      {/* 15. Mobile Floating Action Bar */}
      <StickyMobileCTA />
    </div>
  );
}
