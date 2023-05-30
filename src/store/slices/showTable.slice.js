import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowProducts: false,
    isShowClients: false,
    isShowSales: false,
}

const showTableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        changeIsShowProducts: (state) => {
            state.isShowProducts = !state.isShowProducts
        },
        changeIsShowClients: (state) => {
            state.isShowClients = !state.isShowClients
        },
        changeIsShowSales: (state) => {
            state.isShowSales = !state.isShowSales
        }
    }
})

export const {
    changeIsShowProducts,
    changeIsShowClients,
    changeIsShowSales
} = showTableSlice.actions

export default showTableSlice.reducer