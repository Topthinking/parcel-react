import React from 'react'
import {observer} from 'mobx-react'

import Todo from '../../store/todo'
import Item from './item'

@observer
export default class List extends React.Component{
    render() {
        console.log('渲染List组件')
        const list = Todo.list.slice()
        if(list.length === 0){
            return null
        }        
        return (
            <ul>
                {list.map((item,index)=>{
                    return <Item key={item.id} index={index}/>
                })}
            </ul>
        )
    }
}