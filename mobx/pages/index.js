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
               </ul>
            </div>
        )
    }
}