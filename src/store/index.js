import { configureStore } from "@reduxjs/toolkit";

import showTableSlice from "./slices/showTable.slice";

export default configureStore({
    reducer: {
        showTableSlice
    }
})