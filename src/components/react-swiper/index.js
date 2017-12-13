import React from 'react'
import { array, bool, oneOf, number, func } from 'prop-types'
import Swiper from 'swiper'

import '../../../node_modules/swiper/dist/css/swiper.min.css'

// 懒加载组件
const Main = function (Component) { 
    class Loading extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                active: props.active
            }
        }
    
        componentWillReceiveProps(nextProps) {
            if (!this.state.active && nextProps.active) {
                this.setState({
                    active: true
                })
            }
        }
    
        render() {            
            if (!this.state.active) {
                return this.props.loading
            }

            return React.cloneElement(Component)
        }
    }

    return Loading
}

export default class SwiperApp extends React.Component {

    /**
     * menu 菜单列表
     * gradual 需不要过渡
     * position 菜单位置
     * active 当前活跃菜单
     * changeMenu: swiper改变当前菜单的回调函数
     * loading: swiper切换页面需要的显示内容
     * scrollTop: 切换是否回到顶部
     */
    static propType = {
        menu: array.isRequired,
        gradual: bool,
        position: oneOf(['top', 'bottom']),
        active: number,
        changeMenu: func.isRequired,
        loading: func,
        scrollTop: bool
    }

    static defaultProps() { 
        return {
            gradual: false,
            position: 'bottom',
            active: 0,
            scrollTop: false
        }
    }

    constructor(props) {
        super(props)

        let { menu,active } = props

        const area = 1 / (menu.length - 1)

        const areaState = []
        menu.map((item, index) => {
            item.position = index * area
            if (index + 1 < menu.length) {
                areaState.push({
                    'min': index * area,
                    'max': (index + 1) * area,
                    'min-index': index,
                    'max-index': index + 1
                })
            }
        })

        menu = this.computedActive(active, 0, menu)
                
        this.state = {
            tab:menu,
            areaState
        }

        this.area = area
        this.Swiper = null
        this.change = false
        this.active = active
        this.isClick = false

        this.hasLoaded = [active]
    }

    //计算当前菜单栏的显示情况
    computedActive(newIndex, oldIndex, tab) {
        if (newIndex === oldIndex) { 
            tab[newIndex]['isLoading'] = true
            return tab
        }


        tab[newIndex]['progress'] =  '100%'
        tab[oldIndex]['progress'] =  '100%'
        tab[newIndex]['run'] = 'left'
        tab[oldIndex]['run'] = 'right'
        tab[newIndex]['isLoading'] = true

        // 通知父组件 改变menu的值
        this.change = true
        this.active = newIndex
        this.props.changeMenu(tab,newIndex)
    }    

    //改变swiper当前所在屏
    changeTab(index) {

        if (index == this.active) { 
           return false
        }

        this.Swiper && this.Swiper.slideTo(index, 1000, false)
        
        this.computedActive(index,this.active,this.state.tab)

        this.active = index
    }

    swiperContentHeight() { 
        const menuHeight = document.getElementsByClassName('menuList')[0].childNodes[0].offsetHeight            
        const height =  document.body.offsetHeight -menuHeight   
       
        Array.from(document.getElementsByClassName('swiper-content')).map(item => {
            item.style.height = `${height}px`
            item.style.overflowY = 'auto'
            item.style['-webkit-overflow-scrolling'] = 'touch'
        })
        
        const container =  document.getElementById('swiper-container')
        container.style.width = '100%'
        container.style.height = '100%'

        if(this.props.position === 'top'){
            container.style.marginTop = `${menuHeight}px`
            document.getElementsByClassName('fork')[0].style.top = `${menuHeight}px`
            document.getElementsByClassName('fork')[0].style.right = 0
            document.getElementsByClassName('fork')[0].style.position = 'absolute'
            
        }
        
    }

    shouldComponentUpdate(nextProps, nextState) { 
        //保证第一次did渲染，后续如果是 改变 menu 需要阻止第一次的渲染
        if (this.Swiper != null && this.change) { 
            return false
        }
        //如果已经渲染过的swiper屏 阻止其继续渲染
        if (this.hasLoaded.indexOf(nextProps.active) != -1) { 
            return false
        }
        //正常渲染输出
        this.hasLoaded.push(nextProps.active)
        return true
    }

    componentWillReceiveProps(nextProps) { 
        if (nextProps.active != this.props.active) {
            //点击时候 触发的事件变化 也可以说是滑动到最后会触发点击事件
            console.log('点击事件')
            this.isClick = true
            // 说明是点击切换下一屏
            if (!this.change) {
                this.changeTab(nextProps.active)
            } else {               
                this.change = false
                this.isClick = false
            }
        } else {            
            //此时change为true 滑动不会渲染
            if (this.isClick) {
                this.change = false  
                this.isClick = false
            } else { 
                console.log('滑动事件')
            }    
        }
    }

    componentDidMount() {
        this.change = false        
        this.swiperContentHeight()
        window.addEventListener('resize', () => { 
            this.swiperContentHeight()
        })
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

                    self.computedActive(activeIndex, self.active, self.state.tab)

                    self.props.scrollTop && (document.getElementsByClassName('swiper-content')[activeIndex].scrollTop = 0)
                },
                progress: function (progress) {

                    /**
                     * 0-0.5-1
                     * 总数为1平分
                     * 平分区间 = 1/(总数-1) 
                    */
                    if (progressed && self.props.gradual && !self.isClick) {
                        self.state.areaState.map((item, index) => {
                            if (progress > lastProgress) {
                                // 向右滑
                                if (progress <= item.max && lastProgress >= item.min) {

                                    const _area = ((progress - index * self.area) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    self.state.tab[item['max-index']]['scroll'] = ''
                                    self.state.tab[item['min-index']]['scroll'] = ''
                                    

                                    // 通知父组件 改变menu的值
                                    self.change = true
                                    self.props.changeMenu(self.state.tab)
                                }
                            } else if(progress < lastProgress){
                                // 向左滑
                                if (progress >= item.min && lastProgress <= item.max) {

                                    const _area = -((index * self.area - progress) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    self.state.tab[item['max-index']]['scroll'] = 'left'
                                    self.state.tab[item['min-index']]['scroll'] = 'right'
                                
                                    // 通知父组件 改变menu的值
                                    self.change = true
                                    self.props.changeMenu(self.state.tab)
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
        console.log('render')
        return (
            <div className="swiper-container" id="swiper-container">
                <div className="swiper-wrapper">
                    {this.state.tab.map((item, index) => {
                        const Component = Main(item.component)
                        return (
                            <div key={index} className="swiper-slide">
                                <div className="swiper-content">
                                    <Component active={!!item.isLoading} loading={this.props.loading}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export class SwiperPagination extends React.Component { 
    render() {
        const paginationStyle = {
            width: '100%',
            position: 'fixed',
            'zIndex': 19  
        }

        if (this.props.position === 'top') {
            paginationStyle.top = '0'
            paginationStyle.height = '0px'
        } else {
            paginationStyle.bottom = '0'
        }

        return (
            <div className="menuList" style={paginationStyle}>
                {this.props.children}
            </div>
        )
    }
}