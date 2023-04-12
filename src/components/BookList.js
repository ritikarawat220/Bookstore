import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookDisplay from './BookDisplay';
import { gettingBooks } from '../redux/booksFetcher';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

  return (
    <div className="book_content">
      <ul>
        {books.map((book) => (
          <BookDisplay
            Title={book.title}
            Author={book.author}
            key={book.item_id}
            Id={book.item_id}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
