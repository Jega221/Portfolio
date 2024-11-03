import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/Whatido';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <WhatIDo/>
        <Portfolio/>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;