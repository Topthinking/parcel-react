
import React from 'react'
import { observer } from 'mobx-react'

import BaseMobx from '../store/base'

import Btn from '../components/base/btn'

export default observer(() => (
    <div>
        <h1>hello world {BaseMobx.list.name}</h1>
        <Btn />
        <Btn />
    </div>    
))