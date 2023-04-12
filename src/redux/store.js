import { configureStore } from '@reduxjs/toolkit';
// import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';
import booksFetcher from './booksFetcher';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksFetcher,
  },
});
export default store;
