import React from 'react'
import {observer} from 'mobx-react'

import Todo from '../../store/todo'

@observer
export default class List extends React.Component{

    add(){
        Todo.addTodo({
            name:Todo.content,
            id:Todo.list.length+1,
            finish:false
        })
    }

    render(){
        return(
            <div>
                <input type="text" value={Todo.content} onChange={(e)=>{Todo.changeContent(e)}}/>
                <span onClick={this.add.bind(this)}>添加</span>
            </div>
        )
    }
}