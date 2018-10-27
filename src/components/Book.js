import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';
import BookCover from './BookCover';

const Book = ({ title, authors, id, shelfsList, shelfName }) => (
  <div className="book">
    <div className="book-top">
      <BookCover id={id} />
      <BookShelfChanger shelfsList={shelfsList} selected={shelfName}/>
    </div>
    <div className="book-title">{title}</div>
    {authors.map((author, i) => (
      <div key={i} className="book-authors">{author}</div>
    ))}
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  shelfsList: PropTypes.objectOf(PropTypes.string).isRequired,
  shelfName: PropTypes.string
};

export default Book;
