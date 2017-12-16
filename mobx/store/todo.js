import { observable,action,computed } from 'mobx'

class Todo {
    @observable list = []
    @observable content = ''
    @observable index = 0

    constructor() { 
        [...Array(1000)].map((item,index) => { 
            this.list.push({
                name: Math.random(),
                finish: false,
                id:index
            })
        })
    }

    @action
    addTodo(content){
        if(content.name != ''){
            this.list.unshift(content)
            this.content = content
        }
    }

    @action
    setIndex(index) {
        this.index = index
    }
    
    @computed get item() {
        console.log(this.index,this.list.slice().length)
        if (this.index+1 == this.list.slice().length) { 
            return this.content
        }
        
        return {name:123}
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