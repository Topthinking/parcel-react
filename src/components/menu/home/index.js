import React from 'react'
import { Link } from 'react-router-dom'

import { inject } from 'mobx-react'
import bg from './images/1.jpg'

@inject('Env')       
export default class Home extends React.Component {
    render() {   
        const { assetPrefix } = this.props.Env        
        return (
            <div>
                <h1>前端</h1>     
                <Link to="/home/12"><span>点击跳转</span></Link>
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
            </div>
        )
    }
}