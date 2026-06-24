import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import ExperienceSection from './components/ExperienceSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Atmosphere from './components/Atmosphere';

function Home() {
  useEffect(() => {
    // Intersection Observer for section entrance animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Stop observing after it's shown to play only once
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Apply observer to all major sections
    document.querySelectorAll('.reveal-section').forEach((section) => {
      revealObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Atmosphere />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Work />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;