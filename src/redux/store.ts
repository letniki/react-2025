import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.tsx";
import {postSlice} from "./slices/postSlice/postSlice.tsx";
import {commentSlice} from "./slices/commentSlice/commentSlice.ts";

export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        commentSlice: commentSlice.reducer,
        postSlice: postSlice.reducer
    }
});