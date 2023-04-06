import React from 'react';
import BookDisplay from './BookDisplay';

const BookList = () => {
  const books = [
    {
      id: 1,
      Title: 'The Hunger Games',
      Author: 'Suzanne-Collins',
    },
  ];
  return (
    <>
      <div className="book_content">
        <ul>
          {books.map((book) => (
            <BookDisplay
              Title={book.Title}
              Author={book.Author}
              key={book.id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookList;
