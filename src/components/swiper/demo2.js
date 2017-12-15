import React from 'react'
import CSSModules from 'react-css-modules'
import Swiper from 'swiper'
import style from './style/index.scss'

class Index extends React.Component {

    constructor() {
        super()

        const tab = [{
            name: '首页',
            progress: '100%',
        }, {
            name: '前端',
            progress: 0
        }, {
            name: '人工智能',
            progress: 0
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
        this.Swiper1 = null
        this.Swiper2 = null
        this.Swiper4 = null

    }

    changeTab(index) {
        this.Swiper && this.Swiper.slideTo(index, 1000, false)
        this.setState({
            active: index
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
        this.Swiper = new Swiper('#swiper-container2', {
            watchSlidesProgress: true,
            initialSlide: self.state.active,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                clickable: true
            },
            nested:true,
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            on: {
                slideChangeTransitionEnd: function () {
                    const activeIndex = this.activeIndex
                    self.setState({
                        active: activeIndex
                    })
                }               
            }
        })

        this.Swiper2 = new Swiper('#swiper-container3', {
            watchSlidesProgress: true,
            initialSlide: 0,
            nested:true,
            pagination: {
                el: '.swiper-pagination',
                type: 'custom',
                clickable: true
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            on: {
                slideChangeTransitionEnd: function () {
                    // const activeIndex = this.activeIndex
                    // self.setState({
                    //     active: activeIndex
                    // })
                }               
            }
        })
    }

    render() {
        return (
            <div styleName="wraper">
                <div className="swiper-container" id="swiper-container2" styleName="swiper-container1">
                    <div className="swiper-wrapper" styleName="swiper-wrapper">
                        <div className="swiper-slide" styleName="swiper-slide blue tab">首页</div>
                        <div className="swiper-slide" styleName="swiper-slide red tab">
                            <div className="frontEnd">    
                                <div className="swiper-container" id="swiper-container3" styleName="swiper-container1">
                                    <div className="swiper-wrapper" styleName="swiper-wrapper">
                                        <div className="swiper-slide" styleName="swiper-slide tab">首页1</div>
                                        <div className="swiper-slide" styleName="swiper-slide tab">人工智能2</div>                                        
                                    </div>    
                                </div> 
                            </div>        
                        </div>
                        <div className="swiper-slide" styleName="swiper-slide black tab">人工智能</div>
                    </div>
                </div>
                <br />
                <div className="swiper-scrollbar"></div>
                <div className="swiper-pagination" styleName="swiper-pagination">
                    <ul>
                        {this.state.tab.map((item, index) => {
                            return (
                                <li key={index}
                                    onClick={this.changeTab.bind(this, index)}
                                    styleName={index === this.state.active ? 'active' : ''}>                                    
                                    <span className={`item${index}`}                                        
                                    >
                                        {item.name}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>               
                <br />
                <br />
            </div>
        )
    }
}

export default CSSModules(Index, style, {
    handleNotFoundStyleName: 'ignore',
    allowMultiple: true
})