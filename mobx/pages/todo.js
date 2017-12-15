import React from 'react'
import { observer } from 'mobx-react'

import Todo from '../store/todo'

import Input from '../components/todo/input'
import List from '../components/todo/list'

@observer
export default class TodoComponent extends React.Component{
    render() {
        console.log('渲染Todo组件')
        return(
            <div>
                <Input />
                <List/>
            </div>
        )
    }
}