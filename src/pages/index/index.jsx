import React from 'react'
import { Link } from 'react-router-dom'
import Swiper from '../../components/swiper'
import style from './index.scss'

export default class Index extends React.Component { 
    render() { 
        return (
            <div>
                <h1 className={style['name']}>首页</h1>
                <Link to="/home/12"><span className={style['click']}>点击跳转</span></Link>
                <hr />
                <p>react swiper</p>
                <Swiper/>
                <img className={style['img']} src={`/dist/${this.props.bg}`} />
                <hr/>
            </div>
        )
    }
}