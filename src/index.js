import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

const App = (props) => {
  return (
    <h2 className="text-center" style={{ color }}>
      Hello React with JSX!! -- {Math.random()}<br />
      {props.headerMessage}
    </h2>
  );
};

App.propTypes = {
  headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
  headerMessage: 'Hello!!'
};

ReactDOM.render(
  //React.createElement('h2', null, 'Hello React!'),

  // <h2 className="text-center" style={{color}}>
  //   Hello React with JSX!! -- {Math.random()}
  // </h2>,

  <App headerMessage="Hello props!" />,
  document.getElementById('root')
);