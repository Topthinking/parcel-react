import { observable,action,computed } from 'mobx'


class BaseMobx {
    
    @observable list = {
        'name':'',
    }

    constructor() { 
        console.log('初始化base mobx')
    }

    @action
    changeList(data) { 
        this.list = data
    }    

    @observable name = (() => { 
        const res = {};
        [...Array(10)].map((item, index) => { 
            res[index] = {
                pageId:0
            }
        })
        return res
    })()

    @observable info = ''
    @observable loading = false

    @action
    loadInfo() { 
        this.info = '加载中...'
        this.loading = true
        setTimeout(() => { 
            this.loading = false
            this.info = "这是加载后的信息"
        },3000)
    }

    @action
    deleteInfo() { 
        this.info = ''
    }

    @action
    do(cate,value) { 
        this.name[cate] = value
    }
    
}


export default new BaseMobx()