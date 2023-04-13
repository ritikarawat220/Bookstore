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
        <div className="book-butts">
          <button type="button" className="butt">
            Comments
          </button>
          <button type="submit" className="remove-btn" onClick={handleRemove}>
            Remove
          </button>
          <button type="button" className="butt">
            Edit
          </button>
        </div>
        <div className="book-right">
          <div className="perc-left">
            <div className="circle-left">
              <div className="circle-outer">
                <div className="circle-inner" />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="42" cy="50" r="36" strokeLinecap="round" />
              </svg>
            </div>
            <div className="circle-right">
              <p className="pers">77%</p>
              <p className="comp">Completed</p>
            </div>
          </div>
          <div className="perc-right">
            <div className="perc-rightin">
              <h4>CURRENT CHAPTER</h4>
              <p>Chapter 17</p>
              <div>
                <button type="button">UPDATE PROGRESS</button>
                {' '}
              </div>
            </div>
          </div>
        </div>
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
