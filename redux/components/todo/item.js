import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { is } from 'immutable'

import * as todoActions from '../../stores/todo'

@connect((state) => ({
    todo:state.todo.get(todoActions.NAME)
}), (dispatch) => ({ 
    todoAction:bindActionCreators(todoActions,dispatch)
}))
export default class Item extends React.Component{

    constructor(props) { 
        super(props)

        this.isfinish = props.todo[props.index].finish
    }

    finish = () => { 
        this.props.todoAction.handle(this.props.index)
    }

    del = () => { 
        console.log('点击删除')
        this.props.todoAction.del(this.props.index)        
    }

    // componentWillReceiveProps() { 
    //     //console.log('接受receiveProps')
    // }

    shouldComponentUpdate(nextProps) {

        // if (typeof nextProps.todo[this.props.index] == 'undefined') { 
        //     return true
        // }
        
        // if (nextProps.todo[this.props.index].finish == this.isfinish) { 
        //     return false
        // }

        // this.isfinish = !this.isfinish
        
        return false
    }

    componentDidUpdate() { 
        console.log('删除完成')
    }

    render() {
        console.log('渲染Item组件')
        const data = this.props.todo[this.props.index]
        return(
            <li>
                <span onClick={this.finish} style={{color:data.finish ? 'red' : 'black'}}>{data.name}</span>
                <span onClick={this.del}>删除</span>
            </li>
        )
    }
}