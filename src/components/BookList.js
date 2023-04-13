import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookDisplay from './BookDisplay';
import { fetchBooks } from '../redux/books/booksSlice';
import './BookList.css';
import AddBooks from './AddBooks';

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
    <>
      <div className="book_content">
        <ul className="list">
          {bookStatus === 'succeeded'
          && Object.keys(books.books).map((key) => (
            <li key={key}>
              <BookDisplay
                title={books.books[key][0].title}
                author={books.books[key][0].author}
                category={books.books[key][0].category}
                id={key}
              />
            </li>
          ))}
        </ul>
        <AddBooks />
      </div>

    </>
  );
};

export default BookList;
