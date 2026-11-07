import TickerBar from './components/TickerBar';
import Hero from './components/Hero';
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
    <div className="min-h-screen bg-black-deep text-white-off">
      <TickerBar />
      <Hero />
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
      <StickyMobileCTA />
    </div>
  );
}
