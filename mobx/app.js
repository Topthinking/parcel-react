import React from 'react'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Index from './pages/index'
import TodoComponent from './pages/todo'
import Base from './pages/base'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <div style={{
                        position: 'absolute',
                        top: '30px',
                        left: 0
                    }}> 
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/todo" component={TodoComponent} /> 
                            <Route exact path="/base" component={Base} />                                                
                        </Switch>
                    </div>       
                    <Link to="/"><span style={{
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>返回</span></Link>
                </div>     
            </BrowserRouter>
        )
    }
}