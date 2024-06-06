import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './slices/PaginationSlice';

export const store = configureStore({
  reducer: {
    pagination: paginationReducer, // Ensure this key matches the reducer name
  },
});
