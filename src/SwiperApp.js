import React from 'react'
import { observer, inject } from 'mobx-react'
import CSSModules from 'react-css-modules'
import Swiper from 'swiper'

import Index from './components/menu/index'
import Home from './components/menu/home'
import Mine from './components/menu/mine'

import MenuStore from './stores/Menu'

import style from './common/styles/app.scss'

@observer
class SwiperApp extends React.Component {

    constructor() {
        super()

        const tab = [{
            name: '首页',
            progress: '100%',
            component: <Index/>
        }, {
            name: '前端',
            progress: 0,
            component: <Home/>
        }, {
            name: '人工智能',
            progress: 0,
            component: <Mine/>
        }]

        const area = 1 / (tab.length - 1)

        const areaState = []
        tab.map((item, index) => {
            item.position = index * area
            if (index + 1 < tab.length) {
                areaState.push({
                    'min': index * area,
                    'max': (index + 1) * area,
                    'min-index': index,
                    'max-index': index + 1
                })
            }
        })

        this.state = {
            tab,
            areaState,
            active: 0
        }

        this.area = area
        this.Swiper = null

    }

    changeTab(index) {

        if (index == this.state.active) { 
            return false
        }

        this.Swiper && this.Swiper.slideTo(index, 1000, false)
        

        if (index > this.state.active + 1) {
            //向右跨多个
            const minIndex = this.state.active
            const maxIndex = index

            this.state.tab[maxIndex]['progress'] =  '100%'
            this.state.tab[minIndex]['progress'] =  '100%'
            this.state.tab[maxIndex]['run'] = 'left'
            this.state.tab[minIndex]['run'] = 'right'

        } else if(index < this.state.active -1){ 
            //向左跨多个
            const minIndex = this.state.active
            const maxIndex = index

            this.state.tab[maxIndex]['progress'] =  '100%'
            this.state.tab[minIndex]['progress'] =  '100%'
            this.state.tab[maxIndex]['run'] = 'left'
            this.state.tab[minIndex]['run'] = 'right'
        }
        
        this.setState({
            active: index,
            tab:this.state.tab
        })
    }

    /**
     * 0-0.5-1
     * 总数为1平分
     * 平分区间 = 1/(总数-1) 
     */

    componentDidMount() {
        const self = this
        let lastProgress = 0, progressed = false
        this.Swiper = new Swiper('#swiper-container', {
            watchSlidesProgress: true,
            initialSlide: self.state.active,
            pagination: {
                el: '.menuList',
                type: 'custom',
                clickable: true
            },
            on: {
                slideChangeTransitionEnd: function () {
                    const activeIndex = this.activeIndex
                    self.setState({
                        active: activeIndex
                    })
                },
                progress: function (progress) {
                    if (progressed) {
                        self.state.areaState.map((item, index) => {
                            if (progress > lastProgress) {
                                // 向右滑
                                if (progress <= item.max && lastProgress >= item.min) {

                                    const _area = ((progress - index * self.area) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    self.setState({ tab: self.state.tab })
                                }
                            } else {
                                // 向左滑
                                if (progress >= item.min && lastProgress <= item.max) {

                                    const _area = -((index * self.area - progress) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    self.setState({ tab: self.state.tab })

                                }
                            }
                        })

                    } else {
                        progressed = true
                    }
                    lastProgress = progress
                },
            }
        })
    }

    render() {
        return (

            <div styleName="wraper">

                <div className="swiper-container" id="swiper-container" styleName="swiper-container">
                    <div className="swiper-wrapper" styleName="swiper-wrapper">
                        {this.state.tab.map((item, index) => {
                            const Component = React.cloneElement(item.component, {
                                active:index == this.state.active ? true : false
                            })
                            return (
                                <div key={index} className="swiper-slide" styleName="swiper-slide">
                                    {Component}
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="menuList" styleName="swiper-pagination">
                    <ul>
                        {this.state.tab.map((item, index) => {
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
                                    <span className={`item${index}`}
                                        styleName={`item ${item.run == 'right' ? 'itemright' : 'itemleft'}`}
                                        data-content={item.name}
                                    >
                                        {item.name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        )
    }
}

export default inject('Env')(CSSModules(SwiperApp, style, {
    handleNotFoundStyleName: 'ignore',
    allowMultiple: true
}))