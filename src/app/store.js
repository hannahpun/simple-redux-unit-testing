import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../modules/counter/counterSlice';
import authentication from '../modules/dashboard/reducers/authentication';

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authentication.reducer
    }
});
