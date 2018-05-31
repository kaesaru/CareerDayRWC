import React from 'react';
import PropTypes from 'prop-types';
import MentorChip from './MentorChip';


const Mentors = () => (
  <div>
    {/* TODO change so that the specific user mentors are displayed */}
    {/* TODO have the mentors alternate after set time */}
    <hr/>
    <div className='mentor-1'>
      <MentorChip />
    </div>
    <hr/>
    <div className='mentor-2'>
      <MentorChip />
    </div>
    <hr/>
    <div className='mentor-3'>
      <MentorChip />
    </div>
    <hr/>
  </div>
);

export default Mentors; 