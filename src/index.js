// Import the React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component

function getButtonText() {
  return 'Click on me!';
}

const App = () => {
  // const App = function () {
  return (
    <div>
      <label htmlFor='name'>Enter name:</label>
      <input id='name' type='text' />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()} 
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
