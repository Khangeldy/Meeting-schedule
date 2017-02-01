import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configStore from './configStore'
import './index.css';
import 'semantic-ui-css/semantic.css'
import Layout from './components/Layout'
import IntroContainer from './containers/IntroContainer'
import Client from './components/Client'

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={IntroContainer} />
        <Route path="/clients" component={Client} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
