import React from 'react'
import ReactDOM from 'react-dom'
import "babel-polyfill"
import App from './app'

import './common/styles/common.scss'
import '../node_modules/swiper/dist/css/swiper.min.css'

ReactDOM.render(<App />, document.getElementById("root"))
