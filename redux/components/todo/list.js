import React from 'react'

import { connect } from 'react-redux'

@connect(state => state)
export default class List extends React.Component {
    shouldComponentUpdate(nextProps) { 
        if (nextProps.todo.name == this.props.todo.name) { 
            return false
        }
        return true
    }
    render() {
        console.log('渲染【List】组件')
        return (
            <h2>{this.props.todo.name}</h2>
        )
    }
}