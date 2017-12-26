import { observer,inject, Provider } from 'mobx-react'

import React from 'react'

import InjectMobx from '../../store/inject'

import CStore from './store'

import Child from './child/c'


@observer
export default class C extends React.Component {
    
    constructor() { 
        super()

        const _CStore = new CStore()

        //console.log(_CStore)

        this.store = {
            _CStore
        }
    }

    state = {
        show:false
    }

    onClick() { 
        this.setState({
            show:true
        })
    }

    render() {

        return (
            <Provider {...this.store}>
                <div>
                    <h1 onClick={this.onClick.bind(this)}>c {InjectMobx.name}</h1>
                    {this.state.show ? <Child /> : null}
                </div>
            </Provider>    
            
        )
    }
}