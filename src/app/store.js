import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/CountersSlice";
import postsReducer from "../features/counters/posts/postsSlice";
const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
    } 
});
export default store; 