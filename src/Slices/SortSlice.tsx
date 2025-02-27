import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: {},
    reducers: {
        UpdateSort: (state, action) => {
            state =action.payload;
            console.log(state);
            return state;
        },
        resetSort: (state) => {
        state={};
        return state;
        }

    },
    });
    export const { UpdateSort, resetSort } = sortSlice.actions;
    export default sortSlice.reducer;
