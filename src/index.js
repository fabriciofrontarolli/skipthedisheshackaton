import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import './index.css';

import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension';
import thunk                            from 'redux-thunk';
import { Link, Match }                  from 'react-router';

import { BrowserRouter }                from 'react-router';

import combinedReducers                 from './rootReducer';

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Match pattern="/" component={Dashboard} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
