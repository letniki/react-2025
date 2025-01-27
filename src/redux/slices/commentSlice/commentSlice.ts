import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../../models/IComment.ts";
import {getAllComments} from "../../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[];
}
const initialCommentState : CommentSliceType = {comments:[]};
const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI)=>{
        try {
            const comments = await getAllComments().then(value =>value)
            return thunkAPI.fulfillWithValue(comments);
        }catch(e){
            return thunkAPI.rejectWithValue(e);
        }

    }
)
export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initialCommentState,
    reducers:{},
    extraReducers: builder =>
        builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>)=>{
            state.comments = action.payload;
        }).addCase(loadComments.rejected, (state, action)=>{
            console.log(action);
            console.log(state);
        })
});
export const commentSliceActions ={
    ...commentSlice.actions, loadComments
}