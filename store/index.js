import { createStore } from 'redux'
//Counter used for identify each operation
let number = 1
function operations(state = [], action) {
    switch (action.type) {
        case 'ADD_OPERATION':
            return [
                ...state, {
                    number: number++,
                    result: action.result
                }
            ]
        default:
            return state
    }
}

export default store = createStore(operations, [])