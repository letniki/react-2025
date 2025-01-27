import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../../models/IPost.ts";
import {getAllPosts} from "../../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[];
}
const initialPostState: PostSliceType = {posts:[]};
const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) =>{
        try{
            const posts = await getAllPosts().then(value => value);
            return thunkAPI.fulfillWithValue(posts);
        }catch (e){
            return thunkAPI.rejectWithValue(e);
        }
    }
    )
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialPostState,
    reducers:{},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;

        }).addCase(loadPosts.rejected, (state, action) => {
            console.log(action);
            console.log(state);
        })
});

export const postSliceActions ={
    ...postSlice.actions, loadPosts
}