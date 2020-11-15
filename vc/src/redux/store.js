import { reducer as formReducer } from "redux-form";
import thunkMiddle from "redux-thunk";
import authReducer from "./authReducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddle));
window.store = store;

export default store;