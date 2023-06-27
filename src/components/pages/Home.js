import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../ContactUs';
import Resume from '../Resume';

function Home () {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <ContactUs />
      <Resume />
      <Footer />
    </>
  );
}

export default Home;