import { observable,action,computed } from 'mobx'


class BaseMobx {
    
    @observable list = {
        'name':'top',
    }

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
    
}


export default new BaseMobx()