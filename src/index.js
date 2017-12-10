import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import "babel-polyfill"

import App from './app'
import stores from './stores'

import './common/styles/common.scss'
import '../node_modules/swiper/dist/css/swiper.min.css'

const dev = process.env.NODE_ENV != 'production'
const assetPrefix = dev ? '/dist/' : ''

stores.Env.change({
    dev,
    assetPrefix
})

ReactDOM.render(
    <Provider {...stores}>
        <App />    
    </Provider>
,document.getElementById("root"))
