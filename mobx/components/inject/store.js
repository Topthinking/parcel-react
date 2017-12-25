import { observable,action,computed } from 'mobx'


class CStore {
    
    @observable name = 'ASDBASDASD'

    constructor() { 
        console.log('初始化CStore mobx')
    }
}


export default CStore