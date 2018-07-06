import React from 'react';
import PropTypes from 'prop-types';

// const img = '../../images/outdoorchallenge-clouds-cloudscape.jpg'

const Discover = () => (
  <div className='discover'>
    {/* TODO apply a background image  */}
    {/* TODO design accent shapes */}

    {/* TODO place in center of div */}
    <div className='discoverImg'>
      <img src={require('../../images/outdoorchallenge-clouds-cloudscape.jpg')}   alt='outdoor Mountain and Clouds'  height="500" width="100%"/> 
      <h2 className='text'>Discvoer Your Path</h2>
      <div className='overlay'></div>    
    </div>
    
    {/* TODO add career bubbles/shapes with different careers */}
    {/* TODO add link to all the careers from presenters */}
    <button className='ovalButton ovalButton1'>Medical</button>
    <button className='ovalButton ovalButton2'>Engineering</button>
    <button className='ovalButton ovalButton3'>Services</button>
  </div>
);

export default Discover; 
