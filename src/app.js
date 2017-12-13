import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { inject } from 'mobx-react'

import Bg from './components/bg'
import Index from './pages/index/index.jsx'
import Home from './pages/home/index.js'

import fork from './common/images/fork.png'

import './common/styles/app.scss'

@inject('Env')
export default class App extends React.Component {
    render() {
        const { dev, assetPrefix } = this.props.Env
        const Router =  dev ? BrowserRouter : HashRouter
        return (
            <Router>
                <div id="app">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/home/:id" component={Home} />
                    </Switch>
                    <Bg />
                    <a href="https://github.com/Topthinking/parcel-react" className="fork"></a>
                </div>     
            </Router>
        )
    }
}