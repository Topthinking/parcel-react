import React from 'react'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { inject } from 'mobx-react'
//import MobxDevTools from 'mobx-react-devtools'

import Index from './pages/index/index.js'
import Home from './pages/home/index.js'

import Footer from './components/footer'


export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>                       
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/home/:id" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}