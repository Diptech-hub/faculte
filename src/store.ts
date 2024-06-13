import { configureStore } from '@reduxjs/toolkit';
import signInReducer from "./features/auth/signupAuthSlice"
import loginReducer from "./features/auth/loginAuthSlice"

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        login: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
