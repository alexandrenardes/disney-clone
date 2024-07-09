import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Certifique-se de que este caminho está correto
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
