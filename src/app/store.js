import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Certifique-se de que este caminho está correto

export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
