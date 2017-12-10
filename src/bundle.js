import React from 'react'
import { observer } from 'mobx-react'

let _Component = []

export default (props = {}) => {
    
    @observer
    class Bundle extends React.Component {
    
        constructor() {
            super()
            this.state = {
                Component: null
            }
        }

        async componentDidMount() {
            const { template = null, name = null } = props
            if (template != null && name != null) {
                let Component = null,loading = true
                if (_Component.length) {

                    const _tmpComponent = _Component.filter(item => item.name == name)

                    if (_tmpComponent.length) {
                        loading = false
                        Component = _tmpComponent[0].Component
                    }    
                }

                if (loading) {
                    Component = await props.template
                }    
                
                if (Component != null) {
                    _Component.push({
                        name,
                        Component
                    })
                    this.setState({ Component })                    
                }    
            }    
        }

        render() {
            const { Component } = this.state            
            Object.assign(props, { ...this.props })            
            return Component == null ? null : <Component {...props} />
        }
    }

    return Bundle
} 