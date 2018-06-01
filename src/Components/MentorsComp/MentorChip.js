import React from 'react';
import PropTypes from 'prop-types';

// TODO pass mentor information to render that specific mentor
const MentorChip = () => (
  <div>
    {/* TODO mentor chips added here with the information below */}
    {/* TODO style image with "width:500px;height:600px;" */}
    <img src='#' alt='mentor image' />
    <h3>{`Name: ${'Julius'}`}</h3> 
    <h3>{`Career: ${'Patent Examiner'}`}</h3>
    {/* TODO default for history is "current" */}
    <h3>History</h3>
      {/* Place them in order starting with most recent */}
      {/* Maybe limit to previous two jobs */}
    <ul>● Paragon Bioservices, Manufacturing Associate II, 2015, 1 year</ul>      
    <ul>● GSK, Manufacturing Associate I, 2014, 1.5 years</ul>
    <ul>● Eastman Chemical Company, Intern, 6 months</ul>
    <p><strong>Summary/Message to students</strong></p>    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit placeat, voluptatem reprehenderit sint consectetur maxime asperiores dolorem voluptatum debitis similique. Ipsum maiores sed optio, aut recusandae nesciunt necessitatibus cumque accusamus.</p>        
    <button>Learn more</button>
  </div>
);

export default MentorChip; 