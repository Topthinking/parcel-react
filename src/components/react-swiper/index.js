import React from 'react'
import { array, bool, oneOf, number, func } from 'prop-types'
import Swiper from 'swiper'
import './swiper.scss'

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
            areaState,
            active
        }

        this.area = area
        this.Swiper = null
        this.change = false
        this.menuHeight = 0
    }

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
        this.props.changeMenu(tab,newIndex)

        return tab
    }    

    changeTab(index) {

        if (index == this.state.active) { 
           return false
        }

        this.Swiper && this.Swiper.slideTo(index, 1000, false)
        
        const tab = this.computedActive(index,this.state.active,this.state.tab)

        this.setState({
            active: index,
            tab
        })
    }

    swiperContentHeight() { 
        this.menuHeight = document.getElementsByClassName('menuList')[0].childNodes[0].offsetHeight            
        const height = this.props.position === 'top' ?  document.body.offsetHeight + this.menuHeight :  document.body.offsetHeight - this.menuHeight        
       
        Array.from(document.getElementsByClassName('swiper-content')).map(item => {
            item.style.height = `${height}px`
            item.style.overflowY = 'auto'
        })           
    }

    shouldComponentUpdate(nextProps, nextState) { 
        //保证第一次did渲染，后续如果是 改变 menu 需要阻止第一次的渲染
        if (this.Swiper != null && this.change) { 
            return false
        }
        return true
    }

    componentWillReceiveProps(nextProps) { 
        if (nextProps.active != this.props.active) {
            // 说明是点击切换下一屏
            if (!this.change) {
                this.changeTab(nextProps.active)
            } else { 
                this.change = false
                this.setState({
                    active: nextProps.active,
                    tab:nextProps.menu
                })
            }            
        } else {
            // 说明是传递新的props
            this.change = false
        }
    }

    componentDidMount() {
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
                    
                    if (!self.props.gradual) {
                        self.computedActive(activeIndex, self.state.active, self.state.tab)
                    } else { 
                        self.props.changeMenu(self.state.tab,activeIndex)
                    }

                    self.props.scrollTop && (document.getElementsByClassName('swiper-content')[activeIndex].scrollTop = 0)
                },
                progress: function (progress) {

                    /**
                     * 0-0.5-1
                     * 总数为1平分
                     * 平分区间 = 1/(总数-1) 
                    */
                    if (progressed && self.props.gradual) {
                        self.state.areaState.map((item, index) => {
                            if (progress > lastProgress) {
                                // 向右滑
                                if (progress <= item.max && lastProgress >= item.min) {

                                    const _area = ((progress - index * self.area) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'

                                    // 通知父组件 改变menu的值
                                    // 通知父组件 改变menu的值
                                    this.change = true
                                    self.props.changeMenu(self.state.tab)
                                }
                            } else {
                                // 向左滑
                                if (progress >= item.min && lastProgress <= item.max) {

                                    const _area = -((index * self.area - progress) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    
                                    this.change = true
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
        
        //设置css样式
        const containerStyle = {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        }

        const paginationStyle = {
            width: '100%',
            position: 'fixed',
            'zIndex': 9  
        }

        const wraperStyle = Object.assign({},containerStyle) 

        if (this.props.position === 'top') {
            paginationStyle.top = '0'
            paginationStyle.height = '0px'
            containerStyle.marginTop = `${this.menuHeight}px`
        } else {
            paginationStyle.bottom = '0 !important'
        }

        return (
            <div className="wraper" style={wraperStyle}>
                <div className="swiper-container" id="swiper-container" style={containerStyle}>
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
                <div className="menuList" style={paginationStyle}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}