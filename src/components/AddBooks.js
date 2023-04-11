import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const [newState, setnewState] = useState({
    id: '',
    title: '',
    author: '',
  });

  const arr = useSelector((state) => state.books);
  const id = arr.length;
  const onChange = (event) => {
    setnewState({
      ...newState,
      id: (id + 1).toString(),
      [event.target.name]: event.target.value,
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook(newState));
    setnewState({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <div className="add_book">
      <h1>ADD NEW BOOK</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            required
            value={newState.title}
            onChange={onChange}
          />

          <input
            type="text"
            name="author"
            placeholder="Author"
            required
            value={newState.author}
            onChange={onChange}
          />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
