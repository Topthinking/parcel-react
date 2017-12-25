import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as todoActions from '../../stores/todo'

import Item from './item'

@connect(state => ({
    todo:state.todo.get(todoActions.NAME)
}))
export default class List extends React.Component {
    
    shouldComponentUpdate(nextProps) { 
        if (nextProps.todo.length == this.props.todo.length) { 
            return false
        }
        return true
    }

    componentDidUpdate() { 
        console.timeEnd()
    }

    render() {
        console.time()
        console.log('渲染【List】组件')

        const { todo } = this.props

        if(todo.length === 0){
            return null
        }  

        return (
            <ul>
                {todo.map((item,index)=>{
                    return <Item key={item.id} index={index}/>
                })}
            </ul>
        )
    }
}