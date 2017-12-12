import React from 'react'
import ReactSwiper, { SwiperPagination } from '../../components/react-swiper'
import Index from '../../components/menu/index'
import Home from '../../components/menu/home'
import Mine from '../../components/menu/mine'

import Loading from '../../components/Loading'
import './index.scss'

export default class AppIndex extends React.Component {

    constructor() {
        super()

        this.state = {
            active: 0,
            menu: [{
                name: '首页',
                progress: '100%',
                component: <Index />
            }, {
                name: '前端',
                progress: 0,
                component: <Home />
            }, {
                name: '人工智能',
                progress: 0,
                component: <Mine />
            }]
        }

        this.position = Math.floor(Math.random()*2) != 1 ? "bottom" : "top"
        this.gradual = Math.floor(Math.random()*2)

        this.position = 'top'
    }

    //点击菜单切换事件
    changeTab(index) {
        if (index != this.state.active) {
            this.setState({
                active: index
            })
        }
    }

    //改变菜单回调处理
    changeMenu(data, index = null) {
        if (index === null) {
            this.setState({ menu: data })
        } else {
            this.setState({ menu: data, active: index })
        }    
    }

    render() {
        
        const wraperStyle = {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        }

        return (
            <div className="wraper" style={wraperStyle}>
            <ReactSwiper
                menu={this.state.menu}
                position={this.position}
                gradual={!!this.gradual}
                active={this.state.active}
                changeMenu={this.changeMenu.bind(this)}
                loading={<Loading />}
                scrollTop={false}
                />
                <SwiperPagination
                    position={this.position}
                >
                    <ul>
                        {this.state.menu.map((item, index) => {
                            return (
                                <li key={index}
                                    onClick={this.changeTab.bind(this, index)}
                                >
                                    <style dangerouslySetInnerHTML={{
                                        __html: `
                                    .item${index}:before{
                                        width:${item.progress}
                                    }
                                    ` }}></style>
                                    <span className={`item${index} item ${item.run == 'right' ? 'itemright' : 'itemleft'}`}
                                        data-content={item.name}
                                    >
                                        {item.name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </SwiperPagination>    
            </div>
        )
    }

}