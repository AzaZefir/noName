import { combineReducers, createStore } from "redux";
import PostsReducer from "./PostsReducer";


let reducers = combineReducers({
  postsPage: PostsReducer,
});

let store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
