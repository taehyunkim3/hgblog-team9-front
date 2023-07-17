import { combineReducers, createStore } from "redux";
import userInfo from "../reducers/userInfo";
const rootReducer = combineReducers({
    userInfo
})

const store = createStore(rootReducer)

export default store;