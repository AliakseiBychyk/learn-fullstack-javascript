import React from 'react';
import { PropTypes } from 'prop-types';

const color = Math.random() > 0.5 ? 'green' : 'red';

const Header = ({ message }) => {
  return (
    <h2 className="text-center">
      Hello React with JSX!!<br />
      {message}
    </h2>
  );
  // return (
  //   <h2 className="text-center" style={{ color }}>
  //     Hello React with JSX!! -- {Math.random()}<br />
  //     {message}
  //   </h2>
  // );
};

Header.propTypes = {
  message: PropTypes.string.isRequired
};

export default Header;
