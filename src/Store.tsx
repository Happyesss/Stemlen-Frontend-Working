import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Slices/UserSlices";
import ProfileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";
import sortReducer from "./Slices/SortSlice";
import JwtReducer from "./Slices/JwtSlice";

export default configureStore({
    reducer: {
      user: UserReducer,
      profile: ProfileReducer,
      filter: filterReducer,
      sort: sortReducer,
      jwt: JwtReducer
    },
    });