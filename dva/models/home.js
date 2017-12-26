
export default {
    namespace: 'home',
    state: {
        count:0
    },
    reducers: {
        addCount(state) {
            return {
                count: state.count + 1
            }
        },
        minusCount(state) {
            return {
                count: state.count - 1
            }
        }
    }
  }
