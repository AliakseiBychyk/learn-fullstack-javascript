import React from 'react';

import Header from './Header';


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    test: 42
  };
  componentDidMount() {
    // ajax, timers, listeners
    console.log('did Mount');
    debugger;
  }
  componentWillUnmount() {
    // clean timers, listeners
    console.log('will Unmount');
    debugger;
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.test}
        </div>
      </div>  
    );
  }
};

export default App