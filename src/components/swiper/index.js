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

    }

    changeTab(index) {
        this.Swiper2 && this.Swiper2.slideTo(index, 1000, false)
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
        this.Swiper1 = new Swiper('#swiper-container1');
        this.Swiper2 = new Swiper('#swiper-container2', {
            watchSlidesProgress: true,
            initialSlide: self.state.active,
            controller: {
                control: self.Swiper1, //控制Swiper1
            },
            pagination: {
                el: '.swiper-pagination',
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

                                    const _area = ((progress - index*self.area) / self.area) * 100

                                    self.state.tab[item['max-index']]['progress'] = _area + '%'
                                    self.state.tab[item['min-index']]['progress'] = _area + '%'
                                    self.state.tab[item['max-index']]['run'] = 'left'
                                    self.state.tab[item['min-index']]['run'] = 'right'
                                    self.setState({ tab: self.state.tab })
                                }
                            } else {
                                // 向左滑
                                if (progress >= item.min && lastProgress <= item.max) {

                                    const _area = ((index*self.area - progress ) / self.area) * 100
                                    
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

        this.Swiper1.controller.control = this.Swiper2;//Swiper1控制Swiper2，需要在Swiper2初始化后
        this.Swiper2.controller.control = this.Swiper1;//Swiper2控制Swiper1，需要在Swiper1初始化后

        var Swiper3 = new Swiper('#swiper-container3', {
            controller: {
                control: [self.Swiper1, self.Swiper2],//控制前面两个Swiper
            },
        })
    }

    render() {

        //     <div>
        //     {item.name}    
        //     <span styleName="active" style={{width:item.progrcess}}>
        //         <span styleName="txt">{item.name}</span>
        //     </span>    
        // </div>

        return (
            <div styleName="wraper">
                <div className="swiper-container" id="swiper-container1" styleName="swiper-container1">
                    <div className="swiper-wrapper" styleName="swiper-wrapper">
                        <div className="swiper-slide" styleName="swiper-slide blue tab">首页</div>
                        <div className="swiper-slide" styleName="swiper-slide red tab">前端</div>
                        <div className="swiper-slide" styleName="swiper-slide black tab">人工智能</div>
                    </div>
                </div>
                <br />
                <br />
                <div className="swiper-pagination" styleName="swiper-pagination">
                    <ul>
                        {this.state.tab.map((item, index) => {
                            return (
                                <li key={index}
                                    onClick={this.changeTab.bind(this, index)}
                                    styleName={index === this.state.active ? 'active' : ''}>
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
                <div className="swiper-container" id="swiper-container2" styleName="swiper-container2">
                    <div className="swiper-wrapper" styleName="swiper-wrapper">
                        <div className="swiper-slide" styleName="swiper-slide blue">slider1</div>
                        <div className="swiper-slide" styleName="swiper-slide red">slider2</div>
                        <div className="swiper-slide" styleName="swiper-slide black">slider3</div>
                    </div>

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