import React, { Component } from 'react';
import TextLoop from 'react-text-loop';

class App extends Component {
  render() {
    return (
      <h2>
        <TextLoop
          children={[
            'Trade faster',
            'Increase sales',
            'Stock winners',
            'Price perfectly',
          ]}
        />{' '}
        and something else.
      </h2>
    );
  }
}

export default App;
