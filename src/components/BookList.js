import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookDisplay from './BookDisplay';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const bookStatus = useSelector((state) => state.books.status);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  return (
    <div className="book_content">
      <ul>
        {bookStatus === 'succeeded'
          && Object.keys(books.books).map((key) => (
            <li key={key}>
              <BookDisplay
                title={books.books[key][0].title}
                author={books.books[key][0].author}
                id={key}
              />
              <hr />
            </li>
          ))}
      </ul>
      <div>
        <div>
          <p>85%</p>
          <p>Completed</p>
        </div>
      </div>
      <div>
        <h4>CURRENT CHAPTER</h4>
        <p>Chapter 3: “Learning”</p>
        <div>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default BookList;
