import { observable,action,computed } from 'mobx'

class Todo {
    @observable list = []
    @observable content = ''

    @action
    addTodo(content){
        if(this.content != ''){
            this.list.unshift(content)
            this.content = ''
        }
    }

    @action
    finish(index){
        this.list[index].finish = !this.list[index].finish
    }

    @action
    delete(index){        
        let list = this.list.slice()
        list = this.list.filter((v,k)=> k != index)
        this.list = list
    }

    @action
    changeContent(e){
       this.content = e.target.value
    }
}

export default new Todo()