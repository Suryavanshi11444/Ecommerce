import React from 'react';
import './index.css'; // Tailwind import
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faq10 from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <div>
      <Navbar />
      <section id='home'>
      <HeroSection />
      </section>
      <Features />
      <section id='product'>
      <ProductSection />
      </section>
      {/* Add the ContactForm component here */}
      <section id="contact">
      <ContactForm />
      </section>
      
      {/* Add the FAQ component here */}
      <Faq10 />
      {/* Add the Footer component here */}
      <Footer />
      {/* Other content */}
    </div>
  );
}

export default App;