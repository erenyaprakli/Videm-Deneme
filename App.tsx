import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AIWizard } from './components/AIWizard';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-videm-dark font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <AIWizard />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;