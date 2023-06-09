import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection.js';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import ContactUs from '../ContactUs';

function Home () {
  return (
    <>
      <HeroSection />
      <About />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;