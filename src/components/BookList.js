import React from 'react';
import BookDisplay from './BookDisplay';
import { useSelector } from 'react-redux';



const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="book_content">
        <ul>
          {books.books.map((book) => (
            <BookDisplay
              Title={book.Title}
              Author={book.Author}
              key={book.id}
              Id={book.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookList;
