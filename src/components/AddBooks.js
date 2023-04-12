import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

const AddBooks = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const titleVal = useRef();
  const authorVal = useRef();
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!titleVal.current.value || !authorVal.current.value || addRequestStatus !== 'idle') return;
    try {
      setAddRequestStatus('pending');
      dispatch(
        addNewBook({
          item_id: Math.random().toString(36).substring(2, 15)
            + Math.random().toString(36).substring(2, 15),
          title: titleVal.current.value,
          author: authorVal.current.value,
          category: '',
        }),
      );
      titleVal.current.value = '';
      authorVal.current.value = '';
    } catch (err) {
      // console.error('Failed to save the post: ', err);
    } finally {
      setAddRequestStatus('idle');
    }
  };
  return (
    <div className="add_book">
      <h1>ADD NEW BOOK</h1>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          ref={titleVal}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          ref={authorVal}
        />
        <button type="submit" onClick={handleClick} value="Submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
