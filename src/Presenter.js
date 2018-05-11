import React from 'react';
import PropTypes from 'prop-types';

{/* stateless function component */}

{/* destructured the arrow function, so props.tagline is not needed  */}
const Presenter = ({tagline}) => (
<header className="top">
  <h1>RWC Career Day 2018</h1>
  <h2>"Our Future Lies in You"</h2>
  <h5>Warning: website still underconstruction and is not yet mobile friendly, and there are updates to come. </h5>
</header>	
);


export default Presenter;