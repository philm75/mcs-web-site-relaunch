import React from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BusinessHeader from './components/layout/BusinessHeader';
import BackToTopLink from './components/layout/BackToTopLink';

import About from './components/sections/About';
import ContactPage from './components/sections/Contact';
import Services from './components/sections/Services';

function App() {
  return (
    <div className="App" id="top">
        <Header/>
        <BusinessHeader />
        <main id="main">
          <About />
          <Services />
          <ContactPage />
        </main>
        <Footer/>
        <BackToTopLink />
    </div>
  );
}

export default App;
