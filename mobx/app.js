import React from 'react'
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Index from './pages/index'
import TodoComponent from './pages/todo'
import Base from './pages/base'
import Func from './pages/fun'
import Inject from './pages/inject'



export default class App extends React.Component {
    render() {
        console.log('初始化组件')
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
                            <Route exact path="/fun" component={Func} />
                            <Route exact path="/inject" component={Inject} />                                                                                                        
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