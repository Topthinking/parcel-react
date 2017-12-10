import React from 'react'

export default function (Component) { 
    class Main extends React.Component { 

        constructor(props) { 
            super(props)
            this.state = {
                active:props.active
            }
        }
    
        componentWillReceiveProps(nextProps) { 
            if (!this.state.active && nextProps.active) { 
                this.setState({
                    active:true
                })
            }
        }
    

        render() { 
            if (!this.state.active) { 
                return <h1>加载中...</h1>
            }

            return <Component />
        }
    }
    return Main
}