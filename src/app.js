
import React from 'react'
import { HashRouter,BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// const Index = import('./pages/index')
// const Home = import('./pages/home')

// Index.then((Component) => { 
//     console.log(Component)
// })

import Index from './pages/index'
import Home from './pages/home'

import './common/styles/common.scss'
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