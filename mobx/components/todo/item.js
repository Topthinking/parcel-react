import React from 'react'
import {observer} from 'mobx-react'
import Todo from '../../store/todo'

@observer
export default class Item extends React.Component{

    render(){
        const data = Todo.list[this.props.index]
        return(
            <li>
                <span onClick={()=>{Todo.finish(this.props.index)}} style={{color:data.finish ? 'red' : 'black'}}>{data.name}</span>
                <span onClick={()=>{Todo.delete(this.props.index)}}>删除</span>
            </li>
        )
    }
}