import React from 'react'
import { Link } from 'react-router-dom'

import { inject } from 'mobx-react'
import bg from './images/2.jpg'

@inject('Env')    
export default class Home extends React.Component {
    render() {
        const { assetPrefix } = this.props.Env
        return (
            <div>
                <h1>首页</h1> 
                <Link to="/swiper/1"><span>查看更多演示</span></Link>
                <br/>
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <img src={`${assetPrefix}${bg}`} /> 
                <p>我是有底线的</p>
            </div>
        )
    }
}