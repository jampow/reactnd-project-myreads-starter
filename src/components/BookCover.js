import React from 'react';
import PropTypes from 'prop-types';

const coverUrl = id => `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1`;

const BookCover = ({ id }) => (
  <div
    className="book-cover"
    style={{
      width: 128,
      height: 193,
      backgroundImage: `url("${coverUrl(id)}")`
    }}
  />
);

BookCover.propTypes = {
  id: PropTypes.string.isRequired
};

export default BookCover;
