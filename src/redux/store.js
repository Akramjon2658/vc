import { reducer as formReducer } from "redux-form";
import thunkMiddle from "redux-thunk";
import authReducer from "./authReducer";
import PostsReducer from "./postsReducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");

let reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    posts: PostsReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddle));
window.store = store;

export default store;