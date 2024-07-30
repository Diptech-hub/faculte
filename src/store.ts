import { configureStore } from '@reduxjs/toolkit';
import signInReducer from "./features/auth/signupAuthSlice"
import loginReducer from "./features/auth/loginAuthSlice"
import firestoreReducer from "./features/fetch/courseList"
import cartReducer from "./features/cart/cart"

const store = configureStore({
    reducer: {
        signIn: signInReducer,
        login: loginReducer,
        cart: cartReducer,
        firestore: firestoreReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
