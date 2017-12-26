import { observable,action,computed,useStrict } from 'mobx'



class CStore {
    
    @observable name = '子组件状态====CStore'

    constructor() { 
        console.log('初始化CStore mobx')
    }

    @action
    changeName(name) { 
        this.name = name
    }
}


export default CStore