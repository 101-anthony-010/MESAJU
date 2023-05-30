import { configureStore } from "@reduxjs/toolkit";

import showTableSlice from "./slices/showTable.slice";
import loginUserSlice from "./slices/loginUser.slice";

export default configureStore({
    reducer: {
        showTableSlice,
        loginUserSlice
    }
})