import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: 'Recent posted',
    reducers: {
        UpdateSort: (state, action) => {
            state =action.payload;
            console.log(state);
            return state;
        },        resetSort: (state) => {
        return 'Recent posted';
        }

    },
    });
    export const { UpdateSort, resetSort } = sortSlice.actions;
    export default sortSlice.reducer;
