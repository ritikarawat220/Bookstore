import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addingBook } from '../redux/booksFetcher';

const AddBookForm = () => {
  const [newState, setnewState] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
  });

  const arr = useSelector((state) => state.books);
  const id = arr.length;

  const onChangeHandler = (event) => {
    setnewState({
      ...newState,
      id: (id + 1).toString(),
      [event.target.name]: event.target.value,
      category: 'Category Action',
    });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addingBook(newState));
    setnewState({
      id: '',
      title: '',
      author: '',
      category: 'Category Action',
    });
  };

  return (
    <div className="add_book">
      <h2>ADD NEW BOOK</h2>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="title"
            placeholder="Add Title"
            required
            value={newState.title}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            name="author"
            placeholder="Add Author"
            required
            value={newState.author}
            onChange={onChangeHandler}
          />
          <button type="submit">ADD BOOK </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
