import React from 'react';
import PropTypes from 'prop-types';
import sampleMentors from '../../data/sampleMentors.json';
import sampleMentorsArray from '../../data/sampleMentorsArray.json';

/*
*   useful methods for JSON
*    - JSON.parse()
*    - JSON.stringify()
*
*/


// const list = [...sampleMentors.mentors];
// const list = Array.from(sampleMentors.mentors);
// const list = sampleMentors.map();
// const list = JSON.parse(sampleMentors);
const list = sampleMentors;
console.log(list);

// const list2 = [...sampleMentorsArray]; 

// WORKS
// const list2 = Array.from(sampleMentorsArray);
const list2 = [...sampleMentorsArray];
console.log(list2);

// when passing in an argument to the component not really sure what is happening, but an object is returned. It is not needed if already defined above
const MentorsList = () => (
  <div>
    {/* TODO display all mentors to his page with MentorChips */}
    {/* TODO use map() maybe? not to sure of the logic yet */}
    {console.log('How about now?')}
    {console.log(list.mentors)}

  </div>
);

export default MentorsList;