var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

console.log(`
  **********************************
  ********** First render **********
  **********************************`);
ReactDOM.render(
  <App prop1="val1" />,
  document.getElementById('app')
);

console.log(`
  ***********************************
  ********** Second render **********
  ***********************************`);
ReactDOM.render(
  <App prop1="val2" />,
  document.getElementById('app')
);

console.log(`
  ******************************************
  ********** Unload App component **********
  ******************************************`);
ReactDOM.render(
  <div>Unloading App</div>,
  document.getElementById('app')
);

console.log(`
  **********************************
  ********** Third render **********
  **********************************`);
ReactDOM.render(
  <App prop1="val3" />,
  document.getElementById('app')
);
