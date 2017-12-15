import React from 'react'
import { observer } from 'mobx-react'

import BaseMobx from '../store/base'

import Info from '../components/base'


@observer
export default class TodoComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>{BaseMobx.list.name}</h1>
                <Info />
                {BaseMobx.loading
                    ? <p>{BaseMobx.info}</p>
                    : 
                    BaseMobx.info != ''
                    ?
                        <div>
                            <p>{BaseMobx.info}</p>
                            <a href="javascript:;" onClick={()=>BaseMobx.deleteInfo()}>删除</a>
                        </div>
                    : null    
                }
                {
                    BaseMobx.info != ''
                    ?
                    null
                    :
                    <span onClick={() => BaseMobx.loadInfo()}>点击加载</span>  
                }
                
            </div>
        )
    }
}