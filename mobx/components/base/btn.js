import { observer,inject } from 'mobx-react'

import React from 'react'

import BaseMobx from '../../store/base'

import _BaseMobx from './store'

//const _BaseMobx = new BaseMobx()

// console.log(_BaseMobx)

@inject('NewMobx')
@observer
export default class Btn extends React.Component { 

    
    componentWillReact() { 
        console.log('改变了')
    }

    render() { 
        console.log(312312)
        return (
            <h1>123  {this.props.NewMobx.name}</h1>
        )
    }
}