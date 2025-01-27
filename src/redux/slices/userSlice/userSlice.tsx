import {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAllUsers} from "../../../services/api.service.ts";

type UserSliceType = {
    users: IUser[];
}
const initialState: UserSliceType = {users:[]};
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI)=>{
       try {
           const users = await getAllUsers().then(value => value);
           return thunkAPI.fulfillWithValue(users);
       } catch (e){
           return thunkAPI.rejectWithValue(e);
       }
    }
)
export const userSlice = createSlice({
    name:"userSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            console.log(action.payload);
        })
            .addCase(loadUsers.rejected, (state, action) => {
            console.log(action);
            console.log(state);
        })
})

export const userSliceActions ={
    ...userSlice.actions, loadUsers
}