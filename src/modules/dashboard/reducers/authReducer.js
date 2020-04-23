import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        isLogin: false,
        correctUsername: ''
    },
    reducers: {
        success: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLogin = true;
        },
        fail: (state) => {
            state.isLogin = false;
        },
        setUsername: (state, action) => {
            state.correctUsername = action.payload;
        }
    }
});

export default authReducer;
