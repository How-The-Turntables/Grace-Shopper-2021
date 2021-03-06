import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector('#app')
);
