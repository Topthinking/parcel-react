import { observer,inject } from 'mobx-react'

import React from 'react'

import InjectMobx from '../../store/inject'

@inject('NewMobx')
@observer
export default class B extends React.Component {
    
    state = {
        name:12
    }

    componentWillReact() { 
        console.log('组件内部的值发生变化')
        this.setState({name:13})
    }

    render() { 
        return (
            <div>
            <p> import的值：{InjectMobx.name}</p>
            <p> inject的值：{this.props.NewMobx.name}</p>
             <p>state的值：{this.state.name}</p> 
            </div>
        )
    }
}