import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../main'

@Main
export default class Home extends React.Component {
    render() {        
        return (
            <div>
                <Link to="/home/12"><span>点击跳转</span></Link>            
            </div>
        )
    }
}