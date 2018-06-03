import React, { Component } from 'react';
// import Header from './Header';
// new Header component
import Header from './Components/Main/Header';
import Nav from './Components/Main/Nav';
import Discover from './Components/Main/Discover';
import Carousel from './Components/Main/Carousel';
import MentorsList from './Components/MentorsComp/MentorsList';
import QuickTips from './Components/Main/QuickTips';
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
    

        <div className="assignment">
        <h3>Assignment</h3>
          <h4>What do you want to be when you grow up and why?</h4>
          <p>Think about what interests you have. Then on a piece paper, your phone, computer, or other device write 2 or 3 careers that would be of interest to you.</p> 
          <p>After picking your career, explain why you picked that career and what you think you need to do in order to be successful at that career.</p> 
          <p>Afterwards take the information you gathered and send it to the email below telling explaining what you want to be and why.</p>
          <p><strong>Email: </strong>Julius@CareerDayRWC.info</p>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
