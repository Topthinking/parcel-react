import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'mobx-react'
import NewMobx from './store/new'

const store = {
    NewMobx: new NewMobx()
}

ReactDOM.render(
    <Provider {...store}>
        <App />
    </Provider>  
,document.getElementById("root"))
