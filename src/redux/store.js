import { createStore, combineReducers } from 'redux';
import countReducer from './reducers/count-reducer';

const rootReducer = combineReducers({
    countReducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;