import React from 'react'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Index from './pages/index'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={Index} />                                               
                    </Switch>
                </div>     
            </BrowserRouter>
        )
    }
}