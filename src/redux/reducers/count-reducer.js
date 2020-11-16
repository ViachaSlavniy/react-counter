
const initialState = {
    numsLoaded: false,
    minNum: 0,
    maxNum: 0,
    resetActivate: true
}

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                minNum: action.payload[0],
                maxNum: action.payload[1],
                numsLoaded: true
            }
        case 'INCREMENT':
            return {
                ...state,
                minNum: action.payload,
                resetActivate: false
            }
        case 'RESET_COUNTER':
            return {
                ...state,
                minNum: action.payload,
                resetActivate: true
            }
        case 'CHANGE_VALUES':
            return {
                ...state,
                numsLoaded: false
            }
            
        default: return state
    }
}

export default countReducer;