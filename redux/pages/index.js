import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as todoActions from '../stores/todo'

import List from '../components/todo/list'

import { is } from 'immutable'

@connect(state => state, (dispatch) => ({
    todoAction: bindActionCreators(todoActions, dispatch)
}))
export default class Index extends React.Component {

    onClick() {
        this.props.todoAction.add({
            name: '123'
        })
    }

    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        const thisProps = this.props || {}, thisState = this.state || {};
        nextState = nextState | {}

        if ( Object.keys(thisProps).length !== Object.keys(nextProps).length ||
             Object.keys(thisState).length !== Object.keys(nextState).length) {
            return true
        }

        for (const key in nextProps) {
            if (!is(thisProps[key], nextProps[key])) {
                console.log(nextProps[key])
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
                <h3>redux study (打开控制台查看打印)</h3>
                <span onClick={this.onClick.bind(this)}>打开控制台点击看看</span>
                <List />
            </div>
        )
    }
}