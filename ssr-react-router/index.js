import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter,
    HashRouter,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom'
import App from './app'

const Router = process.env.NODE_ENV != 'production' ? BrowserRouter : HashRouter

ReactDOM.render(
    <Router>
        <App/> 
    </Router>
    , document.getElementById("root")
)
