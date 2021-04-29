import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {App} from './components/index';


ReactDOM.render(<Router><App /></Router>, document.querySelector('#app'));
