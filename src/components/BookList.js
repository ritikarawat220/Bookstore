import React from 'react';
import { useSelector } from 'react-redux';
import BookDisplay from './BookDisplay';

const BookList = () => {
  const books = useSelector((state) => state.books);
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
