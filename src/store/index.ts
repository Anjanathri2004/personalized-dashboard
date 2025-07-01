import { configureStore } from '@reduxjs/toolkit';
import preferencesReducer from '../features/preferencesSlice';
import contentReducer from '../features/contentSlice';

export const store = configureStore({
  reducer: {
    preferences: preferencesReducer,
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
