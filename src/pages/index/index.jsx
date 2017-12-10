import React from 'react'
import { Link } from 'react-router-dom'
import Swiper from '../../components/swiper'
import style from './index.scss'
import { inject } from 'mobx-react'

@inject('Env')
export default class Index extends React.Component { 
    render() { 
        const { assetPrefix } = this.props.Env
        return (
            <div>
                <h1 className={style['name']}>首页</h1>
                <Link to="/home/12"><span className={style['click']}>点击跳转</span></Link>
                <hr />
                <p>swiper研究</p>
                <Swiper/>
                <img className={style['img']} src={`${assetPrefix}${this.props.bg}`} />
                <hr/>
            </div>
        )
    }
}