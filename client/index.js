import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <h1>SHIT IS WORKING</h1>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
