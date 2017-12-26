import React from 'react'
import { observer, inject } from 'mobx-react'

import InjectMobx from '../store/inject'

import A from '../components/inject/a'
import B from '../components/inject/b'
import C from '../components/inject/c'

console.log(InjectMobx)

@inject('NewMobx')
@observer
export default class Inject extends React.Component {
    
    render() {

        //const a = new this.props.NewMobx()

        const a = this.props.NewMobx

        return (
            <div>
                <A />
                <B />
                <C />
                {a.name}
            </div>
        )
    }
}
