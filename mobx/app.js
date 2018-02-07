import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Link } from 'react-router-dom'
import MobxDevTool from 'mobx-react-devtools'
import Index from './pages/index'
import TodoComponent from './pages/todo'
import Base from './pages/base'
import Func from './pages/fun'
import Inject from './pages/inject'
import Strict from './pages/strict'

export default class App extends React.Component {
    render() {
        console.log('初始化组件')
        const Router = process.env.NODE_ENV != 'production' ? BrowserRouter : HashRouter
        return (
            <Router>
                <div id="app">
                    <div style={{
                        position: 'absolute',
                        top: '30px',
                        left: 0
                    }}> 
                    {process.env.NODE_ENV != 'production' ? <MobxDevTool /> : null}
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/todo" component={TodoComponent} /> 
                            <Route exact path="/base" component={Base} />   
                            <Route exact path="/fun" component={Func} />
                            <Route exact path="/inject" component={Inject} /> 
                            <Route exact path="/strict" component={Strict} />                                                                                                                                    
                        </Switch>
                    </div>       
                    <Link to="/"><span style={{
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>返回</span></Link>
                </div>     
            </Router>
        )
    }
}