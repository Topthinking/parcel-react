import { observer,inject } from 'mobx-react'

import React from 'react'


@inject('_CStore','NewMobx')
@observer
export default class CChild extends React.Component { 

    render() { 
        return (
            <h1>child c {this.props._CStore.name} ---- {this.props.NewMobx.name}</h1>
        )
    }
}