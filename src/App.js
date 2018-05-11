import React, { Component } from 'react';
import Header from './Header';
import Tips from './Tips';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <p className="App-intro">
        The purpose of this website is to get RWC students thinking about possible career choices for the future that interest them. As well as give them guidance to help them grow and achieve great things in the future. We need to guide the student in the right direction because they are our future! 
        </p>

        <div className="assignment">
        <h3>Assignment</h3>
          <h4>What do you want to be when you grow up and why?</h4>
          <p>Think about what interests you have. Then on a piece paper, your phone, computer, or other device write 2 or 3 careers that would be of interest to you.</p> 
          <p>After picking your career, explain why you picked that career and what you think you need to do in order to be successful at that career.</p> 
          <p>Afterwards take the information you gathered and send it to the email below telling explaining what you want to be and why.</p>
          <p><strong>Email: </strong>Julius@CareerDayRWC.info</p>
        </div>


          <ul className="growth"><h3>Personal Growth</h3>
            <li className="item">
            If you have an interest learn more about it by doing research, litalking to others, finding a mentor, asking questions</li>
            <li className="item">Be open to learning something new. The most important skill is learning how to learn because learning never stops</li>
            <li className="item">Apply the things you learn to real life and make the connections</li>
            <li className="item">Take action little-by-little, consistency is the key</li>
            <li className="item">Think about “How” to solve a problem</li>
            <li className="item">Be your own person, it is okay to be different</li>
            <li className="item">Try to look at things from a different viewpoint and mindset</li>
            <li className="item">Travel outside of Baltimore and experience the world outside of Baltimore</li>
            <li className="item">Learn another Language</li>
            <li className="item">Believe in yourself</li>
          </ul>


        <ul className="career"><h3>Career Path</h3>
            <li className="item">It is okay if you don’t know if you don't know now, you still have time</li>
            <li className="item">There is no one path, you can:
<p>Do a traditional career (Doctor, Scientist, Lawyer, Engineer, Sales)</p></li>
            <li className="item">Combine two different careers into one</li>
            <li className="item">Create your own career that matches our interests</li>
            <li className="item">Always have an open mind to try new things</li>
            <li className="item">Stay curious and keep learning</li>
            <li className="item">Have fun and enjoy what you do</li>
            <li className="item">Learn from every experience</li>
        </ul>

        <ul className="web"><h3>Recommendations</h3>
            <p><strong>Top Three</strong></p>
            <li className="item"><a href="https://www.khanacademy.org/">Khan Academy</a> </li>
            <li className="item"><a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194/ref=pd_lpo_sbs_14_img_0/131-9800091-0498209?_encoding=UTF8&psc=1&refRID=REDT98XM7MV0SJ3ZGEJ5">Rich Dad Boor Dad by Robert T. Kiyosaki</a></li>
            <li className="item"><a href="https://www.glassdoor.com/index.htm">Glassdoor</a></li>
            
            
            <p><strong>Free Eductation</strong></p>
            <li className="item"><a href="https://www.edx.org/">edX</a></li>
            <li className="item"><a href="https://www.coursera.org/">Coursera</a></li>
            <li className="item"><a href="https://www.udacity.com/">Udacity</a></li>
            <li className="item"><a href="https://ocw.mit.edu/index.htm">MIT</a></li>

            <p><strong>Career</strong></p>
            <li className="item"><a href="https://www.usajobs.gov/">USA Jobs</a></li>
            <li className="item"><a href="https://www.linkedin.com/">Linked In</a></li>

            <p><strong>Books/Audio books</strong></p>
            <li className="item"><a href="https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322/ref=sr_1_1?s=books&ie=UTF8&qid=1524199482&sr=1-1&keywords=mindset">Mindset by Carol S. Dweck</a></li>
            <li className="item"><a href="https://www.amazon.com/Grit-Passion-Perseverance-Angela-Duckworth/dp/1501111108/ref=sr_1_3?s=books&ie=UTF8&qid=1524199497&sr=1-3&keywords=grit">Grit by Angela Duckworth</a></li>
            <li className="item"><a href="https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1451639619/ref=sr_1_1?s=books&ie=UTF8&qid=1524199513&sr=1-1&keywords=7+habits+of+highly+effective+people">7 Habits of Highly Effective People by Stephen R. Convey</a></li>
        </ul>

        <ul className="presenter presenter1"><h3>Presenter</h3>
            <p><strong>Julius</strong></p>
            <p><strong>Age:</strong> 28</p>
            <p><strong></strong></p>
            <p><strong>Career:</strong> Patent Examiner</p>
            <p><strong>Background:</strong> BS Chemical Engineering</p>
            <p><strong>Career History:</strong>
              <ul>
                <li>Internship at Eastman Chemical Company</li>
                <li>Manufacturing Associate I at GSK</li>
                <li>Manufacturing Associate II at Paragon Bioservices</li>
              </ul>
            </p>
          </ul>

          <ul className="presenter presenter2"><h3>Presenter</h3>
            <p><strong>Julius</strong></p>
            <p><strong>Age:</strong> 28</p>
            <p><strong></strong></p>
            <p><strong>Career:</strong> Patent Examiner</p>
            <p><strong>Background:</strong> BS Chemical Engineering</p>
            <p><strong>Career History:</strong>
              <ul>
                <li>Internship at Eastman Chemical Company</li>
                <li>Manufacturing Associate I at GSK</li>
                <li>Manufacturing Associate II at Paragon Bioservices</li>
              </ul>
            </p>
          </ul>

          <ul className="presenter presenter3"><h3>Presenter</h3>
            <p><strong>Julius</strong></p>
            <p><strong>Age:</strong> 28</p>
            <p><strong></strong></p>
            <p><strong>Career:</strong> Patent Examiner</p>
            <p><strong>Background:</strong> BS Chemical Engineering</p>
            <p><strong>Career History:</strong>
              <ul>
                <li>Internship at Eastman Chemical Company</li>
                <li>Manufacturing Associate I at GSK</li>
                <li>Manufacturing Associate II at Paragon Bioservices</li>
              </ul>
            </p>
          </ul>

          <div className="footer">
            <p>©️2018 Robert W. Coleman</p>
          </div>
      </div>
    );
  }
}

export default App;
