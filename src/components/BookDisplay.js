import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookDisplay = (props) => {
  const { Title, Author, Id } = props;

  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBook(Id));
  };

  return (
    <li className="item">
      <h2>{Title}</h2>
      <h3>{Author}</h3>
      <button type="submit" className="Remove Text-Style-8" onClick={handleRemove}>Remove</button>
    </li>
  );
};

BookDisplay.propTypes = {
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default BookDisplay;
