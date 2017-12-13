import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './pages/index'
import TodoComponent from './pages/todo'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/todo" component={TodoComponent} />                        
                    </Switch>
                </div>     
            </BrowserRouter>
        )
    }
}