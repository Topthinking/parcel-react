import dva, { connect } from 'dva';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import fetch from 'dva/fetch';
import React from 'react';
import ReactDOM from 'react-dom'

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
//app.model({});

// 3. Router
const HomePage = () => <div>Hello Dva.</div>;
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/about" exact component={HomePage} />
    </Switch>
  </BrowserRouter>
);

// 4. Start
ReactDOM.render(
    <App />    
,document.getElementById("root"))
