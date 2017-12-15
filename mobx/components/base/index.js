import React from 'react'
import {observer} from 'mobx-react'

import BaseMobx from '../../store/base'

@observer
export default class Info extends React.Component{

    onClick() { 
        BaseMobx.list.name = 'TOP'
    }

    render() {
        
        return (
            <h1 onClick={this.onClick.bind(this)}>点击看看</h1>
        )
    }
}