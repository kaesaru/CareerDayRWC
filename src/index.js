import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
*   Trying to add redux to my webpage using a simple counter that has 
*   state
*/

// state
let state = 10;

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
const store = createStore(counter, state);

console.log(store.getState());
// console.log(typeof(increment));
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
store.dispatch(INCREMENT);
store.dispatch(DECREMENT);
console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
