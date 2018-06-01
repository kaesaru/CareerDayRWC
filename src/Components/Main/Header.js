import React from 'react';
import PropTypes from 'prop-types';


const Header = () => (
  // TODO add styling with themes if desired {classes.header}
  <div className='header'>
    {/* TODO fix this img issue, find correct path */}
    <img src='http:localhost:3000/Users/jkit/FullStack_local/websites/careerDay/src/logo.svg' alt='logo' 
    className='logo'/>
    <h1>Career Path</h1>
    {/* TODO social media links */}
    {/* TODO form w/ login */}
  </div>
);

export default Header;