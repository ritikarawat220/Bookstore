import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import './BookDisplay.css';

const BookDisplay = (props) => {
  const {
    title, author, category, id,
  } = props;

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="main" data-id={id}>
      <div className="wrapper">
        <div className="book-category">
          {category}
        </div>
        <h2 className="book-title">
          {title}
        </h2>
        <h3 className="book-author">
          {author}
        </h3>

        <button type="submit" className="Remove Text-Style-8" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

BookDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookDisplay;
