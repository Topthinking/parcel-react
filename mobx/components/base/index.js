import React from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

import _BaseMobx from '../../store/base'

//const _BaseMobx = new BaseMobx()

export default class Info extends React.Component{

    static contextTypes = {
        name:PropTypes.string
    }

    onClick() { 
        console.log('点击',this.context.name)
        //BaseMobx.list.name = 'TOP'
    }

    shouldComponentUpdate() { 
        return false
    }

    render() {
        console.log('render',this.context.name)
        return (
            <h1 onClick={this.onClick.bind(this)}>点击看看</h1>
        )
    }
}