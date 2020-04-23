import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'modules/dashboard/reducers/authReducer';

export default configureStore({
    reducer: {
        auth: authReducer.reducer
    }
});
