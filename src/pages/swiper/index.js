import React from 'react'
import { Link } from 'react-router-dom'

import Demo1 from '../../components/swiper/demo1'
import Demo2 from '../../components/swiper/demo2'


export default class SwiperApp extends React.Component { 
    render() { 
        console.log()
        let component = '暂无'
        switch (parseInt(this.props.match.params.id)) { 
            case 1:
                component = <Demo1 />
            break;
            case 2:
                component = <Demo2 />
            break;
        }

        const demo = [...Array(2)].map((item,index) => index+1)
        
        return (
            <div>
                <ul>
                    {demo.map(item => { 
                    return (
                        <li key={item}>
                            <Link to={`/swiper/${item}`}>
                                demo{item}
                            </Link>
                        </li>)
                    })}    
                </ul>
                <div>
                    {component}
                </div>
            </div>
        )
    }
}