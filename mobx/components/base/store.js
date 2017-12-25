import { observable,action } from 'mobx'


class Base { 
    @observable name = 111

    @action
    change() { 
        this.name = Math.random()
    }
}

export default new Base()