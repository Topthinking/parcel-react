import { observable,action,computed } from 'mobx'


class Inject {
    
    @observable name = 'ASDBASDASD'

    constructor() { 
        console.log('初始化inject mobx')
    }
}


export default new Inject()