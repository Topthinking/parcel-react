import { observable, action } from 'mobx'

class Menu { 
    @observable active = 0
    @observable menu_list = ''

    @action changeActive(index) { 
        this.active = index
    }

    @action changeMenu(data) { 
        this.menu_list = data
    }
}

export default new Menu()