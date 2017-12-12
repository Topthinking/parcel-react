import { observable, action } from 'mobx'

class Menu { 
    @observable active = 0

    @action changeActive(index) { 
        this.active = index
    }
}

export default new Menu()