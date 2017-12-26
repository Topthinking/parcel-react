import React from 'react'
import { connect } from 'dva'
import { 
  Link
} from 'react-router-dom'

export default connect(({ home }) => ({ 
  home
}))((props) => {
  return (
    <div>
      <span>当前数字:{props.home.count}</span>
      <button onClick={() => { props.dispatch({ type: 'home/addCount' }) }}>增加</button>
      <button onClick={() => { props.dispatch({ type: 'home/minusCount' }) }}>减少</button> 
      <br />
      <Link to="/about">查看详情</Link>
    </div>
  )
})