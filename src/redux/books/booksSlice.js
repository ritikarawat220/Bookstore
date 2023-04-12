import axios from "axios"; // eslint-disable-line
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EUo9pb3a4RVtCmIUmiJ3/books';
const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('posts/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addNewBook = createAsyncThunk(
  'posts/addNewBook',
  async (initialBook, { dispatch }) => {
    const response = await axios.post(url, initialBook);
    dispatch(fetchBooks());
    return response.data;
  },
);

export const deleteBook = createAsyncThunk(
  'posts/deleteBook',
  async (initialBook, { dispatch }) => {
    const response = await axios.delete(`${url}/${initialBook}`, initialBook);
    dispatch(fetchBooks());
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: { },
  extraReducers(builder) {
    /* eslint-disable */
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    /* eslint-enable */
  },
});

export const { bookAdded, bookRemoved } = booksSlice.actions;

export default booksSlice.reducer;
