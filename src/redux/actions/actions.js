const SET_COUNT = 'SET_COUNT'
const INCREMENT = 'INCREMENT'
const RESET_COUNTER = 'RESET_COUNTER'
const CHANGE_VALUES = 'CHANGE_VALUES'

export const starterAC = (numsArr) => {
    return {
        type: SET_COUNT,
        payload: numsArr 
    }
}

export const incrementAC = (num) => {
    return {
        type: INCREMENT,
        payload: num
    }
}

export const reseterAC = (minNum) => {
    return {
        type: RESET_COUNTER,
        payload: minNum,
    }
}

export const changeValuesAC = () => {
    return {
        type: CHANGE_VALUES
    }
}