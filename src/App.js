import React, { Component } from 'react';
// import Header from './Header';
// new Header component
import Header from './Components/Main/Header';
import Nav from './Components/Main/Nav';
import Discover from './Components/Main/Discover';
import Carousel from './Components/Main/Carousel';
import MentorsList from './Components/MentorsComp/MentorsList';
import QuickTips from './Components/Main/QuickTips';
import Assignment from './Components/Main/Assignment';
import Footer from './Components/Main/Footer';

// removed and updated
// import Tips from './Tips';
import logo from './logo.svg';
import './App.css';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Nav />
        </header>
        <Discover />
        <Carousel />
        <MentorsList />
        <QuickTips />
        <Assignment />
        <Footer />
      </div>
    );
  }
}

export default App;
