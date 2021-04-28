import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Nav}/>
        <h1>SHIT IS WORKING</h1>
      </div>
    );
  }
}

export default App;
