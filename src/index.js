import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
// import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { buildStore } from "./store";

const history = createHistory();
const store = buildStore(history, {});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
