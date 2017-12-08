import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.scss'

export default class Home extends React.Component {
    render() {
        const { params: { id } } = this.props.match
        return (
            <div>
                <h1>详情页面</h1>
                <p>编号:{id}</p>
                <Link to="/">
                    <div className={style['back']}>点击返回</div>
                </Link>
            </div>
        )
    }
}