import React from 'react'
import { connect } from 'dva'

export default connect(({ about }) => ({ 
    list:about.list
}))((props) => { 

    const { list } = props

    let inputRef

    return (
        <div>
            <h1>about</h1>
            <div>
                <h3>添加待办事项</h3>    
                <br/>
                <input type="text" ref={(node) => inputRef = node} />
                <button onClick={() => {
                    props.dispatch({ type: 'about/addTodoContent',inputRef})
                }}>添加</button>
            </div>
            
            <ul>
                {list.length ? list.map(item => { 
                    return <li key={item.id}>{item.name}</li>
                }) : null}
            </ul>
        </div>
    )
})