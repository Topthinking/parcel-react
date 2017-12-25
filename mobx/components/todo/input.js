import React from 'react'
import {observer} from 'mobx-react'

import Todo from '../../store/todo'

@observer
export default class List extends React.Component{

    input = ''

    add() {
        Todo.addTodo({
            name:Math.random(),
            id:Todo.list.length+1,
            finish:false
        })
        this.input.value = ''
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