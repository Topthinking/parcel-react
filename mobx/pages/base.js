import React from 'react'
import PropTypes from 'prop-types'
import { observer,inject } from 'mobx-react'

import _BaseMobx from '../store/base'

import Info from '../components/base'

import Btn from '../components/base/btn'


//const _BaseMobx = new BaseMobx()

//console.log(123,_BaseMobx)

@inject('NewMobx')
@observer
export default class TodoComponent extends React.Component{

    static childContextTypes = {
        name:PropTypes.string
    }

    constructor() { 
        super()

        this.state = {
            name:'top'
        }
        
        _BaseMobx.name[1].pageId = 10
    }

    getChildContext() {
        console.log(this.state.name)
        return {
            name:this.state.name
        }
    }

    componentDidMount() { 
        _BaseMobx.do(14,14)
        this.setState({
            name:'TOP'
        })

        setTimeout(() => { 
            _BaseMobx.name[1].pageId = 11
            this.props.NewMobx.name = 132
            _BaseMobx.changeList({name:true})
           // console.log(_BaseMobx)
        },6000)
    }

    render(){
        return(
            <div>
                <h1>{_BaseMobx.list.name} {_BaseMobx.name[1].pageId}</h1>
                <Btn />
                <Btn />
                <Btn/>
                <Btn/>
                <Btn/>
                <Btn/>
                <Btn/>
                
                <Info />
                {_BaseMobx.loading
                    ? <p>{_BaseMobx.info}</p>
                    : 
                    _BaseMobx.info != ''
                    ?
                        <div>
                            <p>{_BaseMobx.info}</p>
                            <a href="javascript:;" onClick={()=>_BaseMobx.deleteInfo()}>删除</a>
                        </div>
                    : null    
                }
                {
                    _BaseMobx.info != ''
                    ?
                    null
                    :
                    <span onClick={() => _BaseMobx.loadInfo()}>点击加载</span>  
                }
            </div>
        )
    }
}