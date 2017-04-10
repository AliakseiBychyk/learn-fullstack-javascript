import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// App.propTypes = {
//   headerMessage: React.PropTypes.string.isRequired
// };

// App.defaultProps = {
//   headerMessage: 'Hello!!'
// };

ReactDOM.render(
  //React.createElement('h2', null, 'Hello React!'),

  // <h2 className="text-center" style={{color}}>
  //   Hello React with JSX!! -- {Math.random()}
  // </h2>,

  // <App headerMessage="Hello props!" />,
  <App />,
  document.getElementById('root')
);