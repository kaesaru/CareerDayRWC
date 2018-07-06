import React from 'react';
import PropTypes from 'prop-types';
// TODO import theme for styling
// TODO need to import pages from router

const Nav = () => (
  <div className='nav'>
    {/* TODO reorder more relavent to the left */}
    {/* TODO add functionality to the Buttons to go to desired pages */}
    {/* TODO style buttons and orient on website */}
    <Link to='about'>About</Link>
    {/* TODO add drop down functionality with Finance, Skills, Travel */}
    <Link to='mentors'>Mentors</Link>
    <Link to='tutorial'>Tutorial</Link>
    {/* TODO add drop down funcitonality with Free courses, College */}
    <Link to='dducation'>Education</Link>
    <Link to='life'>Life</Link>
    <Link to='resources'>Resources</Link>
    <Link to='contact'>Contact</Link>    
  </div>
);

export default Nav;