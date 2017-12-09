import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style/index.scss'

class Index extends React.Component{ 
    render() { 
        return (
            <div styleName="swiper">
                <div>123</div>
            </div>
        )
    }
}

export default CSSModules(Index,style)