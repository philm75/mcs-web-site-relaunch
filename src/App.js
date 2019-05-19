import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BusinessHeader from './components/layout/BusinessHeader';

import HomePage from './components/pages/Home';
import ContactPage from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <BusinessHeader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Home" component={HomePage} />
            <Route exact path="/Contact" component={ContactPage} />
          </Switch>        
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
