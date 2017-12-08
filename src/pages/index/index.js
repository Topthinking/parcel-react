import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.scss'
import bg from './images/1.jpg'

export default class Home extends React.Component { 
    render() { 
        return (
            <div>
                <h1 className={style['name']}>首页</h1>
                <Link to="/home/12"><span className={style['click']}>点击跳转</span></Link>
                <hr />
                <img className={style['img']} src={`/dist/${bg}`} />
                <hr/>
            </div>
        )
    }
}