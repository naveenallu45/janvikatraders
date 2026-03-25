import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import TobaccoTypes from '@/components/TobaccoTypes';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TobaccoTypes />
      <Features />
      <Reviews />
    </>
  );
}
