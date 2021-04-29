import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import {Nav} from './index';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Nav}/>
        <h1>Im from the App file</h1>
      </div>
    );
  }
}

export default App;
