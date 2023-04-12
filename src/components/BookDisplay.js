import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookDisplay = (props) => {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    dispatch(deleteBook(e.target.parentNode.dataset.id));
  };

  return (
    <div className="item" data-id={id}>
      <h2>
        Title:
        {title}
      </h2>
      <h3>
        Author:
        {author}
      </h3>

      <button type="submit" className="Remove Text-Style-8" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

BookDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookDisplay;
