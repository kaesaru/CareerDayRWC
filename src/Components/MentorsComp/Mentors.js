import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MentorChip from './MentorChip';



const Mentors = () => (
  <div className='mentors'>
    {/* TODO change so that the specific user mentors are displayed */}
    {/* TODO have the mentors alternate after set time */}
    
    {/* for some reason, when using grid these turn vertical?? */}
    {/* <hr/> */}
    <div className='mentor-1'>
      <MentorChip />
    </div>
    {/* <hr/> */}
    <div className='mentor-2'>
      <MentorChip />
    </div>
    {/* <hr/> */}
    <div className='mentor-3'>
      <MentorChip />
    </div>
    {/* <hr/> */}
    {/* {Object.keys(this.state.mentors).map(key => 
            <Mentor 
              key={key} 
              details={this.state.mentors[key]} />)
          } */}
  </div>
);


function mapState(state) {
  return {
    stateFromStore: state
  };
}

export default connect(mapState)(Mentors); 