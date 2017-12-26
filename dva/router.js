import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'

export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} /> 
      </Switch>    
    </Router>
)
