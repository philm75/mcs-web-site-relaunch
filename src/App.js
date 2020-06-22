import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BusinessHeader from './components/layout/BusinessHeader';

import About from './components/sections/About';
import ContactPage from './components/sections/Contact';
import Services from './components/sections/Services';

function App() {
  return (
    <div className="App">
        <Header/>
        <BusinessHeader />
        <main id="main">
          <About />
          <Services />
          <ContactPage />
        </main>
        <Footer/>
        <a href="#bottom" className="back-to-top"><FontAwesomeIcon icon={faChevronUp} /></a>
    </div>
  );
}

export default App;
