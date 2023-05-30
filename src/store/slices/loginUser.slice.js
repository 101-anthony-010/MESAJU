import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  password: "",
  isLoggedIn: false
};

const loginUserSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginIn: (state, action) => {
        const {user, password} = action.payload
        if (user == "admin" && password == "password") {
            const newState = {...state,...action.payload, isLoggedIn: true}
            localStorage.setItem("userInfo", JSON.stringify(newState))
            return newState
        }

    },
    logOut: (state) => {
        const newState = {...state, ...initialState, isLoggedIn: false}
        localStorage.setItem("userInfo", JSON.stringify(newState))
        return newState
    }
}
});

export const {
    loginIn,
    logOut,
} = loginUserSlice.actions;

export default loginUserSlice.reducer;
