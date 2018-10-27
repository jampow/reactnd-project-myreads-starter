import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
import BookCover from './BookCover';

const Book = ({ title, author, id }) => (
  <div className="book">
    <div className="book-top">
      <BookCover id={id} />
      <BookShelfChanger />
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{author}</div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Book;
