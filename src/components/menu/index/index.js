import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../main'

import { inject } from 'mobx-react'
import bg from './images/2.jpg'

@Main
@inject('Env')    
export default class Home extends React.Component {
    render() {
        const { assetPrefix } = this.props.Env
        return (
            <div>
                <h1>首页</h1> 
                <Link to="/home/12"><span>点击跳转</span></Link>
                <img src={`${assetPrefix}${bg}`} />                
            </div>
        )
    }
}