import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const coverUrl = id => `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1`;

const Book = ({ title, author, id }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${coverUrl(id)}")` }}></div>
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
