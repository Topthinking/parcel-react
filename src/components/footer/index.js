import React from 'react'
import bg from './images/2.jpg' 
import { observer,inject } from 'mobx-react'

@inject('Env')
export default class Footer extends React.Component { 
    render() { 
        const { assetPrefix } = this.props.Env
        return (
            <footer>
                <h2>Footer</h2>    
                <img src={`${assetPrefix}${bg}`} />
            </footer>  
        )
    }
}