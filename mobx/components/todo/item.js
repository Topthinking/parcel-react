import React from 'react'
import {observer} from 'mobx-react'
import Todo from '../../store/todo'

@observer
export default class Item extends React.Component{

    state = {
        show:true
    }

    del = () => { 
        console.log('点击了删除')
        this.setState({ show: false })
    }

    componentDidUpdate() {
        //console.log('删除完成')
        if (!this.state.show) {
            Todo.delete(this.props.index)
        }    
    }

    render() {
        console.log('渲染Item组件')
        if (!this.state.show) { 
            return null
        }
        const data = Todo.list[this.props.index]
        return(
            <li>
                <span onClick={()=>{Todo.finish(this.props.index)}} style={{color:data.finish ? 'red' : 'black'}}>{data.name}</span>
                <span onClick={this.del}>删除</span>
            </li>
        )
    }
}