import {configureStore} from '@reduxjs/toolkit';

import userReducer from './slices/user';

// Create the Redux store
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Optional: Add middleware or other store configurations
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization checks if needed
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
