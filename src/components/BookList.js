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
              <hr />
            </li>
          ))}
        </ul>

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
        <div className="divider" />
        <AddBooks />
      </div>

    </>
  );
};

export default BookList;
