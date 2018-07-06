import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// TODO import theme for styling
// TODO need to import pages from router

const Nav = () => (
  <div className='nav'>
    {/* TODO reorder more relavent to the left */}
    {/* TODO add functionality to the Buttons to go to desired pages */}
    {/* TODO style buttons and orient on website */}
    <Link className='styledLink' to='about'>About</Link>
    {/* TODO add drop down functionality with Finance, Skills, Travel */}
    <Link className='styledLink' to='mentors'>Mentors</Link>
    <Link className='styledLink' to='tutorial'>Tutorial</Link>
    {/* TODO add drop down funcitonality with Free courses, College */}
    <Link className='styledLink' to='education'>Education</Link>
    <Link className='styledLink' to='life'>Life</Link>
    <Link className='styledLink' to='resources'>Resources</Link>
    <Link className='styledLink' to='contact'>Contact</Link>    
  </div>
);

export default Nav;