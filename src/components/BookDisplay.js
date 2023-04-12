import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { removeBook } from '../redux/books/booksSlice';
import { deletingBook } from '../redux/booksFetcher';

const BookDisplay = (props) => {
  const {
    Title, Author, Id, Category,
  } = props;

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deletingBook(Id));
  };

  return (
    <li className="item">
      <h2>{Title}</h2>
      <h3>{Author}</h3>
      <h4>{Category}</h4>
      <button type="submit" onClick={handleRemove}>Remove</button>
    </li>
  );
};

BookDisplay.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
};

export default BookDisplay;
