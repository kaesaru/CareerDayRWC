import React from 'react';
import PropTypes from 'prop-types';
// TODO import theme for styling
// TODO need to import pages from router

const Nav = () => (
  <div className='nav'>
    {/* TODO reorder more relavent to the left */}
    {/* TODO add functionality to the Buttons to go to desired pages */}
    {/* TODO style buttons and orient on website */}
    <button>About</button>
    {/* TODO add drop down functionality with Finance, Skills, Travel */}
    <button>Mentors</button>
    <button>Tutorial</button>
    {/* TODO add drop down funcitonality with Free courses, College */}
    <button>Education</button>
    <button>Life</button>
    <button>Resources</button>
    <button>Contact</button>    
  </div>
);

export default Nav;