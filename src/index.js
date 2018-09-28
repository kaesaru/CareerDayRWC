import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.css';
import registerServiceWorker from './registerServiceWorker';

// removed to test out the data as an array instead of an object
import sampleMentors from './data/sampleMentors.json';
// import sampleMentorsArray from './data/sampleMentorsArray.json';

import App from './App';
import About from './Components/Pages/About';
import Life from './Components/Pages/Life';
import Mentors from './Components/MentorsComp/Mentors';
import Education from './Components/Pages/Education';
import Resources from './Components/Pages/Resources';
import Contact from './Components/Pages/Contact';
import Tutorial from './Components/Pages/Tutorial';
import base from './base';





/*
*   Trying to add redux to my webpage using a simple counter that has 
*   state
*/

// state
//const data = sampleMentors;
const initialState = {
  //numbers: 0,
  //mentorsData: data
};

// ISSUE when placed here does not show up in Root
// const mentors = base.syncState('mentors', 
//   {
//     context: this,
//     state: 'mentors'
//   }
// )

// console.log(mentors);

// Actions 
// QUESTION: can these be incorperated into the creator? why is is seperate?
const INCREMENT = { type: 'INCREMENT' }
const DECREMENT = { type: 'DECREMENT' }

// Action creators
const increment = () => { type: 'INCREMENT' } 
const decrement = () => { type: 'DECREMENT' }

// Dispactcher
// const dispatch = dispatch(increment());

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1; 
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


const ADD_MENTOR = { type: 'ADD_MENTOR' }
const REMOVE_MENTOR = { type: 'REMOVE_MENTOR' }

const modifyMentor = (state = {} , action) => {
  // switch (action.type) {
  //   case 'ADD_MENTOR':
  //     return state.numbers + 1;
  //   case 'REMOVE_MENTOR':
  //     return state.numbers - 1;
  //   default:
  //     return state;
  // }

  switch (action.type) {
    case 'INCREMENT':
      return { numbers: state.numbers + 1};
    case 'DECREMENT':
      return { numbers: state.numbers - 1};
    default:
      return state;
  }
}

console.log(ADD_MENTOR);
// store.dispatch(ADD_MENTOR);
// store.dispatch(ADD_MENTOR);



const createState = ( state = {}, action ) =>{ 
  switch (action.type) {
    case 'ADD_STATE':
      return state
    default:
      return state;
  }
}

/*  STORE
*   - Holds state (all of it?)
*   - access to state "getState()"
*   - updates state "dispatch(action)"
*   - register listeners "subscribe(listener)"
*
*   1st arg - passes reducer or combineReducers to the store
*   2nd arg - (optional) specify state
*
*/
let store = createStore(createState, initialState);

console.log(store.getState());
// console.log(typeof(increment));

// Test for Implementation of redux and react-redux
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// console.log(store.getState());
// store.dispatch(DECREMENT);
// store.dispatch(DECREMENT);
// store.dispatch(DECREMENT);
// console.log(store.getState());






/*  TODO
*   - set up Redux to control the state of data (i.e., user profiles, 
*     etc)
*   - set up React Router to control the state of the URLs for page 
*     (i.e., the different pages of the site)
*   - figure out the flow of the data for Redux and the kind of 
*     actions you will need and the reducers 
*
*
*
*
*
*
*
*
*/


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.mentorsRef;
  }

  componentWillMount() {
    this.mentorsRef = base.syncState('mentors', 
    {
      context: this,
      state: 'mentors'
    });
    // console.log(this.mentorsRef);
    console.log('will mount');
    console.log(this.mentorsRef.context.state);
    this.state = this.mentorsRef.context.state;

  }

  componentDidMount() {
    // console.log(this.state);
    console.log(store.getState());
    console.log('did mount');

    console.log(this.mentorsRef.context.state);

  }

  componentWillUnmount() {
    base.removeBinding(this.mentorsRef);
    
    console.log('umount');
    console.log(this.mentorsRef.context.state);

  }

  check = () => {
    console.log('hello');
  };

  render() {
    // const data = this.state.mentors
    console.log(this.mentorsRef.context.state);

    return (
      <Provider store={store}>
      {/* Because Router is just used to route tothe different pages it makes sense to use Redux to go directly to the component rather then trying to pass it down */}
        <Router>
          <div>
            <Route path="/" exact component={App} />
            {/* ISSUE SOLVED: didn't spell "component" right, ば〜か  */}
            <Route path='/about' component={About} />
            <Route path='/life' component={Life} /> 
            <Route path='/mentors' component={Mentors} /> 
            <Route path='/resources' component={Resources} /> 
            <Route path='/contact' component={Contact} /> 
            <Route path='/education' component={Education} /> 
          <Route path='/tutorial' component={Tutorial} /> 
          </div>      
        </Router>
      </Provider>
    );
  }
}

// const Root = () => (
// )

Root.propTypes = {
  store: PropTypes.object.isRequired
}


ReactDOM.render(
<Root />, document.getElementById('root'));
// registerServiceWorker();




// REDUX ONLY code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// // import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// /*
// *   Trying to add redux to my webpage using a simple counter that has 
// *   state
// */

// // state
// let state = 10;

// // Actions 
// // QUESTION: can these be incorperated into the creator? why is is seperate?
// const INCREMENT = { type: 'INCREMENT' }
// const DECREMENT = { type: 'DECREMENT' }

// // Action creators
// const increment = () => { type: 'INCREMENT' } 
// const decrement = () => { type: 'DECREMENT' }

// // Dispactcher
// // const dispatch = dispatch(increment());

// // Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1; 
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// /*  STORE
// *   - Holds state (all of it?)
// *   - access to state "getState()"
// *   - updates state "dispatch(action)"
// *   - register listeners "subscribe(listener)"
// *
// *   1st arg - passes reducer or combineReducers to the store
// *   2nd arg - (optional) specify state
// *
// */
// const store = createStore(counter, state);

// console.log(store.getState());
// // console.log(typeof(increment));
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(INCREMENT);
// store.dispatch(DECREMENT);
// console.log(store.getState());

// ReactDOM.render(
// <Provider store={store}>
//   <App />
// </Provider>, document.getElementById('root'));
// registerServiceWorker();
