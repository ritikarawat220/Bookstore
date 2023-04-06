import React from 'react';

const AddBook = () => {
  <div className="add_book">
    <h1>ADD NEW BOOK</h1>
    <div>
      <form>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  </div>;
};

export default AddBook;
