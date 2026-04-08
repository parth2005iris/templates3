import Navbar       from '../components/Navbar';
import Hero         from '../components/Hero';
import Logos        from '../components/Logos';
import Features     from '../components/Features';
import HowItWorks   from '../components/HowItWorks';
import Pricing      from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ          from '../components/FAQ';
import Footer       from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
