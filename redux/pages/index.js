import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../stores/todo'

import Input from '../components/todo/input'
import List from '../components/todo/list'

import { is } from 'immutable'

@connect(state => ({}), (dispatch) => ({
    todoAction: bindActionCreators(todoActions, dispatch)
}))
export default class Index extends React.Component {

    shouldComponentUpdate(nextProps = {}, nextState = {}) {

        // console.log('输出',this.props,nextProps)

        // console.log(is(this.props, nextProps))

        // return !(this.props === nextProps || is(this.props, nextProps)) ||
        //     !(this.state === nextState || is(this.state, nextState));
        
        const thisProps = this.props || {}, thisState = this.state || {};
        nextState = nextState | {}

        //console.log(nextProps,this.props)

        if ( Object.keys(thisProps).length !== Object.keys(nextProps).length ||
             Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true
        }

        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                //console.log(thisProps[key],nextProps[key])
                return true
            }
        }

        for (const key in nextState) {
            if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
                return true
            }
        }
        return false
    }

    // shouldComponentUpdate(nextProps) {
    //     if (!!this.props.todo.name == false) { 
    //         return false
    //     }
    //     if (nextProps.todo.name == this.props.todo.name) { 
    //         return false
    //     }   
    //     return true
    // }

    render() {
        console.log('渲染【Index】组件')
        return (
            <div>
                <Input/>
                <List />
            </div>
        )
    }
}