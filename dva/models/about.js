
export default {
    namespace: 'about',
    state: {
        list: [{
            id: 1,
            name: '写作业',
            finish: false
        }]
    },
    reducers: {
        addTodoContentSuccess({ list }, { content }) {
            list.push({
                id: list.length + 1,
                name: content,
                finish:false
            })
            
            return {
                list:list.slice()
            }
        }
    },
    effects: {
        * addTodoContent({ inputRef }, { call, put }) { 
            const content = inputRef.value
            if (content != '') {
                inputRef.value = ''
                yield put({ type: 'addTodoContentSuccess',content })
            }    
        }
    }
}