import { observable, action } from 'mobx'

class Env {
    @observable assetPrefix = ''
    @observable dev = false

    @action
    change({ assetPrefix = '', dev = false } = {}) {
        this.assetPrefix = assetPrefix
        this.dev = dev
    }
}

export default new Env()

