import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({message}) => {
  return (
    <h2 className="text-center" style={{ color }}>
      Hello React with JSX!! -- {Math.random()}<br />
      {message}
    </h2>
  );
};

Header.propTypes = {
  message: React.PropTypes.string.isRequired
};

const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div>
        
      </div>
    </div>  
  );
};

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