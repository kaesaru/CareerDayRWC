import React from 'react';
import PropTypes from 'prop-types';


const Header = () => (
  // TODO add styling with themes if desired {classes.header}
  <div className='header'>
    {/* TODO fix this img issue, find correct path */}
    <img src={require('../../images/rwcLogo.png')} alt='logo' 
    className='logo' height="120" width="250"/>
    <div className='title'>
      <h1>Career Path</h1>
      {/* Another options: Follow Your Own Path; Choose Your Path */}
      <h2>"Knowledge For Life"</h2>
    </div>
    
    {/* TODO social media links */}
    {/* TODO form w/ login */}
  </div>
);

export default Header;