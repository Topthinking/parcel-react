import { observer,inject } from 'mobx-react'

import React from 'react'

import InjectMobx from '../../store/inject'

@inject('NewMobx')
@observer
export default class A extends React.Component { 

    componentDidMount() { 
        setTimeout(() => { 
            this.props.NewMobx.name = '改变了a'
        },1000)        
    }

    render() { 
        return (
            <h1>123 {InjectMobx.name}</h1>
        )
    }
}