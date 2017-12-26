import { observable,action,computed,useStrict } from 'mobx'

useStrict(true)

class StrictMobx {
    @observable name = '严格模式的组件名称'

    @action
    change(name, node) {
        if (name == '') { 
            node.input.value = ''
        }
        this.name = name
    }
}


export default StrictMobx