import React from 'react';
import PropTypes from 'prop-types';


const Header = () => (
  // TODO add styling with themes if desired {classes.header}
  <div className='header'>
    {/* TODO fix this img issue, find correct path */}
    {/* src={require('../../images/rwcLogo.png')} */}
    <img src='./images/rwcLogo.png' alt='logo' 
    className='logo' height="120" width="250"/>
    <div className='x'>
      <h1>Career Path</h1>
      {/* Another options: Follow Your Own Path; Choose Your Path */}
      {/* <h3>"Knowledge For Life"</h3> */}
    </div>
    
    {/* TODO social media links */}
    {/* TODO form w/ login */}
  </div>
);

export default Header;