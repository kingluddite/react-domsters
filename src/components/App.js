import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import MainContent from './MainContent';
import './../css/basic.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <MainContent />
      </div>
    );
  }
}

export default App;
