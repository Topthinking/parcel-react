import { observable,action,computed } from 'mobx'


class NewMobx {
    
    @observable name = 'inject的组件'

    constructor() { 
        console.log('初始化new mobx')
    }
}


export default NewMobx