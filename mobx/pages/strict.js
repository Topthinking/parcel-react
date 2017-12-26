import React from 'react'
import { observer } from 'mobx-react'
import _StrictMobx from '../store/strict'

const StrictMobx = new _StrictMobx()

export default observer(() => { 

    let ref = {
        input: null,
        span:null
    }

    return (
        <div>
            <input ref={(node) => ref.input = node} onChange={(e)=>StrictMobx.change(e.target.value,ref)}/>    
            <h1 onClick={() => { StrictMobx.change('',ref)}}>重置</h1>    
            <span ref={(node) => ref.span = node}>{StrictMobx.name}</span>
        </div>
    )
})    