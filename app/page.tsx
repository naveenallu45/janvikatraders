import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import TobaccoTypes from '@/components/TobaccoTypes';
import Grading from '@/components/Grading';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TobaccoTypes />
      <Grading />
      <Features />
    </>
  );
}
