import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as todoActions from '../../stores/todo'

@connect(state => ({
    todo:state.todo.get(todoActions.NAME)
}), (dispatch) => ({
    todoActions:bindActionCreators(todoActions,dispatch)
}))
export default class List extends React.Component{

    input = ''

    add() {
        //if (this.input.value != '') {
            this.props.todoActions.add({
                name: Math.random(),
                finish: false,
                id: this.props.todo.length + 1
            })
        //}    

        this.input.value = ''
    }

    shouldComponentUpdate() { 
        return false
    }

    componentDidMount() { 
        // setInterval(() => { 
        //     this.add()
        // },150)
    }

    render() {
        console.log('渲染输入框')
        return(
            <div>
                <input type="text" ref={(e)=>(this.input = e)}/>
                <span onClick={this.add.bind(this)}>添加</span>
            </div>
        )
    }
}