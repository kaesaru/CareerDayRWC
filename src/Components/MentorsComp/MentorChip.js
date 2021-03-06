import React from 'react';
import PropTypes from 'prop-types';

// TODO pass mentor information to render that specific mentor
const mentor = {
  name: 'Julius',
  career: 'Patent Examiner',
  edu: ['B.S. Chemical Engineering'],
  img: 'pic',
  history: [
    'Paragon Bioservices, Manufacturing Associate II, 2015, 1 year',
    'GSK, Manufacturing Associate I, 2014, 1.5 years',
    'Eastman Chemical Company, Intern, 6 months'
  ],
  summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat, voluptatem reprehenderit sint consectetur maxime asperiores dolorem voluptatum debitis similique. Ipsum maiores sed optio, aut recusandae nesciunt necessitatibus cumque accusamus.'

};

// TODO figure out how to cleanly factor out the history 
// const mentorHistory = [
//   'Paragon Bioservices, Manufacturing Associate II, 2015, 1 year',
//   'GSK, Manufacturing Associate I, 2014, 1.5 years',
//   'Eastman Chemical Company, Intern, 6 months',
// ];

// const mapHistory = mentorHisotry.forEach();
// const mapHistory = mentorHisotry.map();

class MentorChip extends React.Component {
  
  render() {
    return (
      <div className='mentorChip'>
        {/* TODO mentor chips added here with the information below */}
        {/* TODO style image with "width:500px;height:600px;" */}
        <img 
        src="./images/jack-cain-351549-unsplash.jpg" 
        alt='mentor image'
        width='150px' height='100px' 
        />
        <h4>{` ${mentor.name} - ${mentor.career}`}</h4>
        <h5>{`Education - ${mentor.edu}`}</h5>
        {/* <h3>{`Career: ${'Patent Examiner'}`}</h3> */}

        {/* TODO default for history is "current" */}
        <p className='x'>History</p>
          {/* Place them in order starting with most recent */}
          {/* Maybe limit to previous two jobs */}
        <ul className='bodyTwo'>● {mentor.history[0]}</ul>      
        <ul className='bodyTwo'>● {mentor.history[1]} </ul>
        <ul className='bodyTwo'>● {mentor.history[2]}</ul>
        <p className='x'><strong>Summary/Message to students</strong></p>    
        <p className='bodyTwo'>{mentor.summary}</p>        
        <button className='button'>Learn more</button>
      </div>
    )
  }
};

export default MentorChip; 