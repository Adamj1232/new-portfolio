import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
// import './index.css';
import { Router } from 'react-router-dom'
import { Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()


ReactDOM.render(
  <Router history ={history}>
    <Route to ='/' component ={App}/>
  </Router>,
   document.getElementById('main'));
