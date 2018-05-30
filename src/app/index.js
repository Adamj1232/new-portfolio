import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { getMovies } from './actions/index'
import { Router, browserHistory, Route } from 'react-router-dom';

import app from './components/app.js'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={app}/>
  </Router>,
  document.getElementById('main')
)