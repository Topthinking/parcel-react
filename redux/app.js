import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom'

import Index from './pages/index'

export default class App extends React.Component {
    render() {
        const Router = process.env.NODE_ENV != 'production' ? BrowserRouter : HashRouter
        return (
            <Router>
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={Index} />                                               
                    </Switch>
                </div>     
            </Router>
        )
    }
}