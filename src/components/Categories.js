import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const selectCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <div className="text">
        <h2>{selectCategories}</h2>
        <button type="submit" onClick={handleClick}>Check Status</button>
      </div>
    </div>
  );
};

export default Categories;
