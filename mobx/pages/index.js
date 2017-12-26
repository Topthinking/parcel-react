import React from 'react'
import {Link} from 'react-router-dom'

export default class List extends React.Component{

    render(){
        return(
            <div>
               <ul>
                   <li>
                        <Link to="/todo">TodoList</Link>
                    </li>
                    <li>
                        <Link to="/base">Mobx基础操作</Link>                        
                    </li>
                    <li>
                    <Link to="/fun">func</Link>                        
                    </li>
                    <li>
                    <Link to="/inject">inject</Link>                        
                    </li>   
                    <li>
                    <Link to="/strict">严格模式</Link>                        
                </li>      
               </ul>
            </div>
        )
    }
}