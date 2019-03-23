import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Header from './components/header';
import Section from './components/section';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
