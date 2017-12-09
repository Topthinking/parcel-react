
import React from 'react'
import { HashRouter,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Index from './pages/index/index.js'
import Home from './pages/home/index.js'

import bg from './common/images/2.jpg' 

export default class App extends React.Component { 
    render() { 
        return (
            <BrowserRouter>
                <div>  
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route path="/home/:id" component={Home}/>
                    </Switch>
                    <footer>
                        <h2>Footer</h2>    
                        <img src={`/dist/${bg}`} />
                    </footer>    
                </div>      
            </BrowserRouter>
        )
    }
}